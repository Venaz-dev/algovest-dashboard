import React, {useState} from 'react';
import Icon from '../common/Icons';
import {ModalHeadingSection, ModalInputSection, EstimationSection } from './StakeModal';


//custom Modal components for the Yield Page Modals
const YieldModalLabel = ({className, icon_name, token, color, lockup_period, recommendation, stake_percent, size}) => {
    return (
        <div className={className}>
            <div className='flex pl-2 pr-2 pt-1 align-center'>
                <p className="heading-small mr-1 tcolor-green"> {stake_percent} </p>
                <div className="recommend_box text-smaller color-white bg-green bord-rad-10 w-30"><p>{recommendation}</p></div>
            </div>
            <div className='flex justify-between pl-2 pr-2 pb-1'>
                <div className='flex'>
                    <Icon name={icon_name} size={size} color={color} />
                    <p className="text-smaller ml-1"> {lockup_period} </p>
                </div>
                <span> |  </span>
                <div className='flex'>
                    <Icon name={icon_name} size={size} color={color} />
                    <p className="text-small ml-1"> {token} </p>
                </div>
            </div>
        </div>
    )
}

// Modal for Yield Pool Page
const YieldPoolModalComp = ({showModal, closeModal}) => {
    
    return (
        <>
            { showModal && 
                <div className='modal_overlay'>
                    <div className='modal-cont'>
                            <div className='close-icon flex-end'
                                onClick={closeModal}>
                                <Icon name='plus-sign' size={20} color='green'/>
                            </div>
                            <YieldPoolModal />
                    </div>
                </div>
            }
        </>
    )
}

export default YieldPoolModalComp


// Modals for YieldPool
export const YieldPoolModal = () => {
    const [toggleTab, setToggleTab] = useState(1);
    
    const switchTab = (ind) => {
            setToggleTab(ind);
    }
    return (
        <div className='modal-container w-30'>    
                    <div className='modal-tabs flex'>
                        <div 
                            className={toggleTab === 1 ? 'tabs active-tabs' : "tabs"}
                            onClick={() => switchTab(1)}> </div>
                        <div 
                            className={toggleTab === 2 ? 'tabs active-tabs' : "tabs"}
                            onClick={() => switchTab(2)}> </div>
                        <div 
                            className={toggleTab === 3 ? 'tabs active-tabs' : "tabs"}
                            onClick={() => switchTab(3)}> </div>
                    </div>
                    <div className='content-tabs'>
                        <YieldPoolModalCompOne toggleTab={toggleTab}/> 
                        <YieldPoolModalCompTwo toggleTab={toggleTab}/> 
                        <YieldPoolModalCompThree toggleTab={toggleTab} />
                    </div>
        </div>
            
    )
}



const YieldPoolModalCompOne = ({toggleTab}) => {
    return (
        <div className={toggleTab === 1 ? 'content active-content' : "content"}>

            <ModalHeadingSection heading_text='USDC Yield Pool' subhead_text='Choose a pool and deposit any amount.' />

            <YieldModalLabel 
                token='USDC' 
                lockup_period='8 weeks lockup period'  
                stake_percent='40% APY'
                size={20}
                icon_name="CopyIcon"
                color='green'
                className='labels bord-1 bord-rad-10 mt-3'
            />

            <YieldModalLabel 
                token='USDC' 
                lockup_period='16 weeks lockup period' 
                recommendation='Recommended' 
                stake_percent='60% APY'
                size={20}
                icon_name='CopyIcon'
                color='green'
                className='labels bord-green bord-rad-10 mt-3 bg-light-green'
            />

            <YieldModalLabel 
                token='USDC' 
                lockup_period='24 weeks lockup period' 
                stake_percent='80% APY'
                size={20}
                icon_name='CopyIcon'
                color='green'
                className='labels bord-1 bord-rad-10 mt-3'
            />

        </div>
    )
}

const YieldPoolModalCompTwo = ({toggleTab}) => {
    return (
        <div className={toggleTab === 2 ? 'content active-content' : "content"}>

            <ModalHeadingSection heading_text='Deposit USDC' subhead_text='Enter USDC amount and earn high cumulative interest.' />

            <ModalInputSection token='USDC' value='10,000.00' placeholder='' icon_name='plus-sign' size={20} /> 

            <div className='lockup-period-label mt-5 flex align-center justify-between pl-3 pr-3'>
                <div className='flex'>
                    <Icon name='CopyIcon' size={20} color='green' /> 
                    <p className='ml-1'> 8 weeks lockup period</p>
                </div>
                <div>
                    <p> @ 40% APY </p>
                </div>
            </div>
            <div className='modal-btn'>
                <button className='btn btn-primary mt-4'> Connect Wallet </button>
            </div> 

            <EstimationSection icon_name='CopyIcon' color='green' size={45} amount='10,560.00'  estimated_reward='40%% (APY) Estimated Earnings'/>
        </div>
    )
}

const Wallet = ({walletType, color, size, icon_name}) => {
    return (
            <div className='wallet-cont wallet-type flex align-center pl-2 mt-2'>
                <Icon name={icon_name} size={size} color={color} />
                <p className='font-large ml-2'> {walletType} </p>
            </div>
    )
}

const YieldPoolModalCompThree = ({toggleTab}) => {
    return (
        <div className={toggleTab === 3 ? 'content active-content' : "content"}>
           <ModalHeadingSection heading_text='Select Wallet' subhead_text='Connect your wallet to complete transaction' />
           <Wallet walletType="MetaMask" size={40} icon_name='CopyIcon' color='green'/>
           <Wallet walletType="WalletConnect" size={40} icon_name='CopyIcon' color='green'/>
        </div>
    )
}

