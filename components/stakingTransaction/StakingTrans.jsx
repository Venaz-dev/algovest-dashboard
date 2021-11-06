import React, {useMemo} from "react";
import Icon from "../../components/common/Icons";
import {useTable, useSortBy} from 'react-table';


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        } = useTable({
        columns,
        data,
        }, useSortBy)
  
  // Render the UI for your table
  return (
      <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <Icon name="ChevronArrow1" size={13} color="#808080" />
                        : <Icon name="ChevronArrow" size={13} color="#000" />
                      : ''}
                  </span>
                </th>
              ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row)
            return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  </tr>
                  )
                })}
            </tbody>
      </table>
    )
  }
  
  export function TableComp() {
      const columns = React.useMemo(
        () => [
            {
              Header: 'Date',
              accessor: 'date',
            },
            {
              Header: 'Tokens',
              accessor: 'token',
            },
            {
              Header: 'Staked AVS',
              accessor: 'staked',
            },
            {
              Header: 'Rewards Earned',
              accessor: d => (
              <div className="wrapper">
                  <div style={{ color: 'green', fontSize: 20, }}>{d.rewards}</div>
                  <div style={{ fontSize: 13, }}>Accrued days: {d.accrued}</div>
              </div>
            )
            },
            {
              Header: ' ',
              accessor: 'status',
              Cell: s => (
                <span className={s.value === "Unstake" ? "RedColor" : null || s.value === "Paid out" ? null : "GreenColor"}>
                    {s.value}
                </span>
              ),
            },
      ], []
    )
  
  const data = React.useMemo(() => [
    {
      id: 1,
      date: "21-09-2021",
      token: "AVS",
      staked: "1,740.00",
      rewards: "0.51942",
      status: "Unstake",
      accrued: "5 days"
    },
    {
      id: 2,
      date: "18-08-2021",
      token: "AVS",
      staked: "25,620.00",
      rewards: "3.76032",
      status: "Paid out",
      accrued: "180 days"
    }
  ], [])
  
  return (
      <div className='stake_table'>
        <Table columns={columns} data={data} />
      </div>
  )
};
  