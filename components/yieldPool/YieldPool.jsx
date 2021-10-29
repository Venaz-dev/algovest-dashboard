import React from 'react';
import Icon from '../../components/common/Icons';



const YieldPoolComp = () => {
    return (
      <div className="w-100">
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th width="150px">Date <Icon name='ChevronArrow1' size={15} /></th>
                        <th width="80px">Coin</th>
                        <th>Amount <Icon name='ChevronArrow' size={15} /></th>
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

export const YieldPoolTransTableSchema = ({date, coin, amount, est_pay, lockup_period, cum_interest, accrue_days, statuss, position}) => {
  return (
                  <tr>
                      <td>{date}</td>
                      <td>{coin}</td>
                      <td>{amount}</td>
                      <td>{est_pay}</td>
                      <td>{lockup_period}</td>
                      <td>{cum_interest}
                        {/* <td>Accrue days: {accrue_days}</td> */}
                      </td>
                      <td>{statuss}</td>
                      <td>{position}</td>
                  </tr>
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
      statuss: "active",
      position: "claim",
      accrue_days: "10days",
  },
  {
      id: 2,
      date: "14. 09. 2021",
      coin: "USDC",
      amount: "76.50693",
      est_pay: "60%",
      lockup_period: "16 Weeks",
      cum_interest: "2.76403",
      statuss: "done",
      position: "claimed",
      accrue_days: "112days"
  },
  {
      id: 3,
      date: "02. 09. 2021",
      coin: "USDC",
      amount: "78.9583",
      est_pay: "80%",
      lockup_period: "24 Weeks",
      cum_interest: "17.13092",
      statuss: "done",
      position: "claimed",
      accrue_days: "169days"
  },
  
]