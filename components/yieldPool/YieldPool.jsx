import React, {useEffect} from 'react';
import Icon from '../../components/common/Icons';



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