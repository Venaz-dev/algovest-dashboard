import React, {useState} from 'react';
import Icon from '../common/Icons';
import Wallet from './YieldPoolModal';


// Modal Custom Components
export const ModalHeadingSection = ({heading_text, subhead_text}) => {
    return (
            <div>
                <p className="heading-smaller">{heading_text}</p>
                <p className='text-smaller'>{subhead_text}</p>
            </div>
    )
}

export const ModalInputSection = ({token, value, placeholder, icon_name, size }) => {
    return (
        <>
             <div className='modal_input flex mt-3 bord-1 justify-between bord-green pl-2 pr-2'>
                    <input value={value} placeholder={placeholder} />
                    <div className='flex pt-1 pb-1 align-center'>
                        <Icon name={icon_name} size={size} /> &nbsp;
                        <p className='font-bold font-regular'>{token}</p>
                    </div>
             </div>
        </>
    )
}

export const EstimationSection = ({icon_name, size, color, amount, estimated_reward }) => {
    return (
        <>
            <div className='estimate_label flex mt-4 pl-1 pr-1 pt-1 pb-1'> 
                <div className='estimate_icon pl-2'>
                    <Icon name={icon_name} size={size} color={color}/>
                </div>
                <div className='estimate pr-2 ml-3'>
                    <p className='text-smaller'> {estimated_reward} </p>
                    <p className="heading-smaller"> {amount} </p>
                </div>
            </div>
        </>
    )
}

// Modal for Stake Page
export const StakeModalComp = ({showModal, closeModal}) => {
    
    return (
        <> 
            { showModal && 
                <div className='modal_overlay'>
                    <div className='modal-cont'>
                            <div className='close-icon flex-end'
                                 onClick={closeModal}>
                                <Icon name='plus-sign' size={20} />
                            </div>
                            <StakeModal />
                    </div>
                </div>
            }
        </>
    )
}

const StakeModal = () => {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (ind) => {
            setToggleState(ind);
    }
    return (
            <div className='modal-container'>
                <div className='modal-tabs'>
                    <div 
                        className={toggleState === 1 ? 'tabs active-tabs' : "tabs active-tabs"}
                        onClick={() => toggleTab(1)}> </div>
                    <div 
                        className={toggleState === 2 ? 'tabs active-tabs' : "tabs"}
                        onClick={() => toggleTab(2)}> </div>
                </div>
                <div className='content-tabs'>
                    <StakeModalCompOne toggleState={toggleState} toggleTab={toggleTab}/>
                    <StakeModalCompTwo toggleState={toggleState}/>
                </div>
                
            </div>
        )
}


//component for Modal Tab 1
const StakeModalCompOne = ({toggleState, toggleTab}) => {
    return (
        <div className={toggleState === 1 ? 'content active-content' : "content"}>

            <ModalHeadingSection heading_text='Stake AVS' subhead_text='Enter AVS amount and earn high rewards' />

            <ModalInputSection token='AVS' value='10,000.00' placeholder='' icon_name='plus-sign' size={20} /> 
                
            <div className='modal-btn'>
                <button 
                    onClick={() => toggleTab(2)}
                    className='btn btn-primary mt-4'> Connect Wallet </button>
            </div>            
            <EstimationSection icon_name='CopyIcon' color='green' size={45} amount='10,560.00'  estimated_reward='6.78% (APY) Estimated Reward'/>
        </div>
    )
}

//component for Modal Tab 2
const StakeModalCompTwo = ({toggleState}) => {
    return (
        <div className={toggleState === 2 ? 'content active-content' : "content"}>
            <ModalHeadingSection heading_text='Select Wallet' subhead_text='Connect your wallet to complete transaction' />
            <Wallet walletType="MetaMask" size={40} icon_name='CopyIcon' color='green'/>
            <Wallet walletType="WalletConnect" size={40} icon_name='CopyIcon' color='green'/>
        </div>
    )
}




