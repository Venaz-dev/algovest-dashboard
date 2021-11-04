import React, {useMemo} from "react";
import Icon from "../../components/common/Icons";
import {useTable, useSortBy} from 'react-table';

const StakingTransactionComp = () => {
  return (
    <div className="w-100">
      <table className="styled-table">
        <thead>
          <tr>
            <th width="300px">
              Date &nbsp;{" "}
              <Icon name="ChevronArrow1" size={13} color="#808080" />
            </th>
            <th>Tokens</th>
            <th width="300px">
              Staked AVS &nbsp;{" "}
              <Icon name="ChevronArrow" size={13} color="#000" />
            </th>
            <th width="300px">Rewards Earned</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map((transactionDetail, index) => (
            <StakingTransTableSchema
              key={index}
              {...transactionDetail}
              id={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StakingTransactionComp;

export const StakingTransTableSchema = ({
  date,
  tokens,
  staked,
  accrued_days,
  no_of_days,
  rewards_earned,
  stage,
}) => {

  let color = stage === 'Unstake' ? 'red' : null || (stage === 'Paid out' ? null : 'blue');


  return (
    <>
      <tr>
        <td rowspan="2">{date}</td>
        <td rowspan="2">{tokens}</td>
        <td rowspan="2">{staked}</td>
        <td>{rewards_earned}</td>
        <td rowspan="2" style={{color: color}}>{stage}</td>
      </tr>
      <tr>
        <td style={{ fontSize: 11 }}>
          {accrued_days} <span>{no_of_days}</span>
        </td>
      </tr>
    </>
  );
};

const transactionDetails = [
  {
    id: 1,
    date: "21. 09. 2021",
    tokens: "AVS",
    staked: "1,740.00",
    rewards_earned: "0.51942",
    stage: "Unstake",
    accrued_days: "Accrue days:",
    no_of_days: "5days",
  },
  {
    id: 2,
    date: "18. 08. 2021",
    tokens: "AVS",
    staked: "25,620.00",
    rewards_earned: "3.76032",
    stage: "Paid out",
    accrued_days: "Accrue days:",
    no_of_days: "18days",
  },
];

function Table({columns, data}) {
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable({
  columns, data, 
}, useSortBy);

  return (
    <table {...getTableProps()}
      border={1}
      style={{borderCollapse: "collapse", width: "80%"}}
    >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                    <span> {
                      column.isSorted
                        ? column.isSortedDesc
                            ? ' ?'
                            : ' ?'
                        : ''
                      } </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}


export function TableComp() {

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        columns: [
          {
            Header: "date",
            accessor: "21. 09. 2021"
          },
          
        ]
      },
      {
        Header: "Tokens",
        columns: [
          {
            Header: "token",
            accessor: "AVS"
          },
        ]
      },
      {
        Header: "Staked AVS",
        columns: [
          {
            accessor: "1,740.00"
          },
          // {
          //   accessor: "25,620.00"
          // },
        ]
      },
      {
        Header: "Rewards Earned",
        columns: [
          {
            accessor: "0.51942"
          },
          
        ]
      },
      {
        Header: "-",
        columns: [
          {
            accessor: "Unstake"
          },
        
        ]
      }
    ], []
  );

  const data = useMemo(
    () => [
      {
        id: 1,
        date: "21-09-2021",
        token: "AVS",
        staked_AVS: "0.9323",
        rewrds: "2.3434",
        status: "Unstake",
      },
      {
        id: 2,
        date: "18-08-2021",
        token: "AVS",
        staked_AVS: "20.3543",
        rewrds: "0.8973",
        status: "Paid out",
      },
    ], []
  );

  return <Table columns={columns} data={data} />
};

