import React, {useEffect} from 'react';
import Icon from '../../components/common/Icons';
import {useTable, useSortBy} from 'react-table';



const YieldPoolComp = () => {
    

    return (
      <div className="w-100">
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th width="150px">Date &nbsp; <Icon name='ChevronArrow1' size={15} /></th>
                        <th width="80px">Coin</th>
                        <th>Amount &nbsp;<Icon name='ChevronArrow' size={15} /></th>
                        <th>Est. APY</th>
                        <th width="150px">Lockup period</th>
                        <th width="140px">Cum. interest</th>
                        <th width="80px">Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {yieldPoolDetails.map((yieldPoolDetail, index) => (
                    <YieldPoolTransTableSchema key={index} {...yieldPoolDetail} id={index} />
                    ))}
                </tbody>
             </table>
        </div>
    )
}

export default YieldPoolComp;

export const YieldPoolTransTableSchema = ({date, coin, amount, est_pay, lockup_period, cum_interest, accrued_days, no_of_days, statuss, position}) => {

    let color = statuss === 'Active' ? 'orange' : (statuss === 'Done' ? 'green' : 'blue');
    let bgColor = statuss === 'Active' ? 'yellow' : (statuss === 'Done' ? 'rgba(22, 245, 40, 0.23)' : '#000');
    let scopeColor = position === 'Claim' ? 'red' : (position === 'Claimed' ? null : 'blue');
  
    return (
            <>
                  <tr>
                      <td rowspan='2'>{date}</td>
                      <td rowspan='2'>{coin}</td>
                      <td rowspan='2'>{amount}</td>
                      <td rowspan='2'>{est_pay}</td>
                      <td rowspan='2'>{lockup_period}</td>
                      <td>{cum_interest}</td>
                      <td rowspan='2' style={{color: color}} className='table_data'><span style={{backgroundColor: bgColor, padding: 5, borderRadius: 30, }}>{statuss}</span></td>
                      <td rowspan='2' style={{color: scopeColor}}>{position}</td>
                  </tr>
                  <tr>
                        <td style={{fontSize:11}}>{accrued_days} <span>{no_of_days}</span></td>
                  </tr>
            </>
  )
};


const yieldPoolDetails = [
  {
      id: 1,
      date: "21. 09. 2021",
      coin: "USDC",
      amount: "102.50435",
      est_pay: "40%",
      lockup_period: "8 Weeks",
      cum_interest: "0.51942",
      statuss: "Active",
      position: "Claim",
      accrued_days: 'Accrue days:',
      no_of_days: "10days",
  },
  {
      id: 2,
      date: "14. 09. 2021",
      coin: "USDC",
      amount: "76.50693",
      est_pay: "60%",
      lockup_period: "16 Weeks",
      cum_interest: "2.76403",
      statuss: "Done",
      position: "Claimed",
      accrued_days: 'Accrue days:',
      no_of_days: "112days",
  },
  {
      id: 3,
      date: "02. 09. 2021",
      coin: "USDC",
      amount: "78.9583",
      est_pay: "80%",
      lockup_period: "24 Weeks",
      cum_interest: "17.13092",
      statuss: "Done",
      position: "Claimed",
      accrued_days: 'Accrue days:',
      no_of_days: "169days",
  },
  
]

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
    
    export function YieldTable() {
    const columns = React.useMemo(
    () => [
    {
    Header: ' ',
    columns: [
    {
    Header: 'Date',
    accessor: 'date',
    },
    {
    Header: 'Coin',
    accessor: 'coin',
    },
    {
    Header: 'Amount',
    accessor: 'amount',
    },
    {
    Header: 'Est. APY',
    accessor: 'est_apy',
    },
    {
    Header: 'Lockup Period',
    accessor: 'lockup_period',
    },
    {
    Header: 'Cum. Interest',
    accessor: c => (
         <div className="wrapper">
            <div style={{ color: 'green', fontSize: 20, }}>{c.cum_interest}</div>
            <div style={{ fontSize: 13, }}>Accrued days: {c.accrued_days}</div>
        </div>
    )
    },
    {
    Header: 'Status',
    accessor: s => (
               <span style={{ fontSize: 12, padding: 7, borderRadius: 15, backgroundColor: `${s.statuss === 'Active' ? 'yellow' : null || s.statuss === 'Done' ? 'rgb(212, 252, 212)' : null }`, color: `${s.statuss === 'Active' ? 'orange' : null || s.statuss === 'Done' ? 'green' : null }`,}}>
                    {s.statuss}
               </span>
      )
    },
    {
    Header: ' ',
    accessor: 'position',
    Cell: p => (
            <span className={p.value === "Claim" ? "RedColor" : null || p.value === "Claimed" ? null : 'GreenColor'}>
                {p.value}
             </span>
    ),
    },
    ],
    }
    ],
    []
    )
    
    const data = React.useMemo(() => [
        {
            id: 1,
            date: "21-09-2021",
            coin: "USDC",
            amount: "102.50435",
            est_apy: "40%",
            lockup_period: "8 Weeks",
            cum_interest: "0.51942",
            statuss: "Active",
            position: "Claim",
            accrued_days: '10days',
            no_of_days: "",
        },
        {
            id: 2,
            date: "14-09-2021",
            coin: "USDC",
            amount: "76.50693",
            est_apy: "60%",
            lockup_period: "16 Weeks",
            cum_interest: "2.76403",
            statuss: "Done",
            position: "Claimed",
            accrued_days: '112days',
        },
        {
            id: 3,
            date: "02-09-2021",
            coin: "USDC",
            amount: "78.9583",
            est_apy: "80%",
            lockup_period: "24 Weeks",
            cum_interest: "17.13092",
            statuss: "Done",
            position: "Claimed",
            accrued_days: '169days',
        },
    ], [])
    
    return (
    <div className='yield_table'>
        <Table columns={columns} data={data} />
    </div>
    )
    };
    
    