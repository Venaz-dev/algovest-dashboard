import React from 'react';
import Icon from '../../components/common/Icons';




const StakingTransactionComp = () => {
    return (
        <div className="w-100">
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th width="300px">Date &nbsp; <Icon name='ChevronArrow1' size={13}  color="#000"/></th>
                        <th>Tokens</th>
                        <th width="300px">Staked AVS &nbsp; <Icon name='ChevronArrow' size={13} color="#000" /></th>
                        <th width="300px">Rewards Earned</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionDetails.map((transactionDetail, index) => (
                    <StakingTransTableSchema key={index} {...transactionDetail} id={index} />
                    ))}
                </tbody>
             </table>
        </div>
    )
}

export default StakingTransactionComp;



export const StakingTransTableSchema = ({date, tokens, staked, rewards_earned, stage}) => {
    return (
                    <tr>
                        <td>{date}</td>
                        <td>{tokens}</td>
                        <td>{staked}</td>
                        <td>{rewards_earned}</td>
                        <td>{stage}</td>
                    </tr>
    )
};


const transactionDetails = [
    {
        id: 1,
        date: "21. 09. 2021",
        tokens: "AVS",
        staked: "1,740.00",
        rewards_earned: "0.51942",
        stage: "Unstake",
    },
    {
        id: 2,
        date: "18. 08. 2021",
        tokens: "AVS",
        staked: "25,620.00",
        rewards_earned: "3.76032",
        stage: "Paid out",
    },
]