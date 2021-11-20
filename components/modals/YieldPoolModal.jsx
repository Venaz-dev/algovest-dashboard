import React, {useState, useRef, useEffect} from 'react';
import Icon from '../common/Icons';
import {ModalHeadingSection, ModalInputSection, EstimationSection } from './StakeModal';


//custom Modal components for the Yield Page Modals
const YieldModalLabel = ({className, onClick, icon_name, token, color, lockup_period, recommendation, stake_percent, size}) => { 

    return (
        <div className={className} onClick={onClick}>
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
const YieldPoolModalComp = ({showModal, setShowModal, closeModal}) => {
 const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
       
         if (showModal && ref.current && !ref.current.contains(e.target)) {
            setShowModal(false)
      }
     }
    document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
  }, [showModal])
    
    return (
        <>
            { showModal && 
                <div className='modal_overlay'>
                    <div className='modal-cont' ref={ref}>
                            <div className='close-icon flex-end'
                                onClick={closeModal}>
                                <Icon name='close-modal' size={20}/>
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
    const [selectOption, setSelectOption] = useState(0);
    const [items, setItems ] = useState({duration: '0 weeks', percent: "0"});
    const [show, setShow] = useState(false);
    
    const switchTab = (ind) => {
            setToggleTab(ind);
            setShow(true);
    }

    const returnTab = () => {
        if (toggleTab === 3) {
            setToggleTab(2);
        } else 
            setToggleTab(1);
    }

    return (
        <div className='modal-container w-30'>
                    {show ? 
                        <div className='return_tab' onClick={returnTab}>
                            <Icon name={"ChevronLeft"} size={23} /> 
                            <p>Go back</p>
                        </div>
                    : null}
                    <div className='modal-tabs flex'>
                        <div 
                            className={toggleTab === 1 ? 'tabs active-tabs' : "tabs active-tabs"}
                            onClick={() => switchTab(1)}> </div>
                        <div 
                            className={toggleTab === 2 ? 'tabs active-tabs' : "tabs"}
                            onClick={() => switchTab(2)}> </div>
                        <div 
                            className={toggleTab === 3 ? 'tabs active-tabs' : "tabs"}
                            onClick={() => switchTab(3)}> </div>
                    </div>
                    <div className='content-tabs'>
                        <YieldPoolModalCompOne toggleTab={toggleTab} setSelectOption={setSelectOption} setItems={setItems} switchTab={switchTab}/> 
                        <YieldPoolModalCompTwo toggleTab={toggleTab} items={items} switchTab={switchTab}/> 
                        <YieldPoolModalCompThree toggleTab={toggleTab}/>
                    </div>
        </div>
            
    )
}



const YieldPoolModalCompOne = ({toggleTab, setItems, switchTab, setSelectOption}) => {

    return (
        <div className={toggleTab === 1 ? 'content active-content' : "content"}>

            {/* <ModalHeadingSection heading_text='USDC Yield Pool' subhead_text='Choose a pool and deposit any amount.' /> */}
            <div>
                <p className="heading-smaller">USDC Yield Pool</p>
                <p className="text-light">Choose a pool and deposit any amount.</p>
            </div>
            <YieldModalLabel 
                token='USDC' 
                lockup_period='8 weeks lockup period'  
                stake_percent='40% APY'
                size={20}
                icon_name="CopyIcon"
                color='green'
                className='labels bord-1 bord-rad-10 mt-3'
                onClick={() => {setSelectOption(1); switchTab(2); setItems({duration: "8 weeks", percent:"40"})}}
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
                onClick={() => {setSelectOption(2); switchTab(2); setItems({duration: "16 weeks", percent:"60"})}}
            />

            <YieldModalLabel 
                token='USDC' 
                lockup_period='24 weeks lockup period' 
                stake_percent='80% APY'
                size={20}
                icon_name='CopyIcon'
                color='green'
                className='labels bord-1 bord-rad-10 mt-3'
                onClick={() => {setSelectOption(1); switchTab(2); setItems({duration: "24 weeks", percent:"80"})}}
            />

        </div>
    )
}

const YieldPoolModalCompTwo = ({toggleTab, items, switchTab }) => {
    const [depositAmount, setDepositAmount] = useState("");
    const handleChange = (e) => {
        setDepositAmount(Number(e.target.value))
      };
    
//Percentage Calculation
  function calcaPercent() {
    // The percentage we wnat to get
    let percentToGet = (Number(items.percent) + 100)/100;
    const percentCalculation = (percentToGet * depositAmount).toFixed(2);
  
    return percentCalculation;
  }

  const estimatedValue = calcaPercent();

    return (
        <div className={toggleTab === 2 ? 'content active-content' : "content"}>

            {/* <ModalHeadingSection heading_text='Deposit USDC' subhead_text='Enter USDC amount and earn high cumulative interest.' /> */}
            <div>
                <p className="heading-smaller">Deposit USDC</p>
                <p className="text-light">Enter USDC amount and earn high cumulative interest.</p>
            </div>
            <ModalInputSection 
                token='USDC' 
                value={depositAmount} 
                placeholder='0.00' 
                size={20}
                onChange={handleChange} 
            /> 

            <div className='lockup-period-label mt-5 flex align-center justify-between pl-3 pr-3'>
                <div className='flex'>
                    <Icon name='CopyIcon' size={20} color='green' /> 
                    <p className='ml-1'> {items.duration} lockup period</p>
                </div>
                <div>
                    <p> @{items.percent}% APY</p>
                </div>
            </div>
            <div className='modal-btn'>
                <button 
                    onClick={() => switchTab(3)}
                    className='btn btn-primary mt-4'> Connect Wallet </button>
            </div> 

            <EstimationSection icon_name='CopyIcon' color='green' size={45} amount={estimatedValue}  estimated_reward={`${items.percent}% APY Estimated Earnings`}/>
        </div>
    )
}


const YieldPoolModalCompThree = ({toggleTab}) => {
    return (
        <div className={toggleTab === 3 ? 'content active-content' : "content"}>
           {/* <ModalHeadingSection heading_text='Select Wallet' subhead_text='Connect your wallet to complete transaction' /> */}
           <div>
                <p className="heading-smaller">Select Wallet</p>
                <p className="text-light">Connect your wallet to complete transaction.</p>
            </div>
            <div className='wallet-cont wallet-type flex align-center pl-2 mt-2'>
                <Icon name="CopyIcon" size={40} color="green" />
                <p className='font-large ml-2'> MetaMask </p>
            </div>
            <div className='wallet-cont wallet-type flex align-center pl-2 mt-2'>
                 <Icon name="CopyIcon" size={40} color="green" />
                <p className='font-large ml-2'>WalletConnect</p>
            </div>
        </div>
    )
}

