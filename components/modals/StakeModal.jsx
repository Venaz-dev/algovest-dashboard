import React, { useState, useRef, useEffect } from "react";
import { numberWithCommas } from "../../utils";
import Icon from "../common/Icons";
import Link from "next/link";

// export const ModalInputSection = ({
//   token,
//   value,
//   placeholder,
//   size,
//   onChange
// }) => {
//   return (
//     <>
//       <div className="modal_input flex mt-3 justify-between pl-2 pr-2">
//         <input value={value} placeholder={placeholder} onChange={onChange}/>
//         <div className="flex pt-1 pb-1 align-center">
//           <Icon name={"algovest"} size={size} /> &nbsp;
//           <p className="font-bold font-regular">{token}</p>
//         </div>
//       </div>
//     </>
//   );
// };

export const EstimationSection = ({
  icon_name,
  size,
  color,
  amount,
  estimated_reward,
}) => {
  return (
    <>
      <div className="estimate_label flex mt-4 pl-1 pr-1 pt-1 pb-1">
        <div className="estimate_icon pl-2">
          <Icon name={"magnet"} size={size} color={color} />
        </div>
        <div className="estimate pr-2 ml-3">
          <p
            className="text-smaller text-light"
            style={{ fontSize: 12, marginBottom: 3 }}
          >
            {estimated_reward}
          </p>
          <p className="heading-smaller" style={{ fontWeight: "600" }}>
            {amount}
          </p>
        </div>
      </div>
    </>
  );
};

// Modal for Stake Page
export const StakeModalComp = ({ showModal, setShowModal, closeModal }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showModal]);
  return (
    <>
      {showModal && (
        <div className="modal_overlay">
          <div className="modal-cont" ref={ref}>
            <div className="close-icon flex-end" onClick={closeModal}>
              <Icon name="close-modal" />
            </div>
            <StakeModal />
          </div>
        </div>
      )}
    </>
  );
};

const StakeModal = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (ind) => {
    setToggleState(ind);
  };
  return (
    <div className="modal-container">
      <div className="modal-tabs">
        <div
          className={
            toggleState === 1 ? "tabs active-tabs" : "tabs active-tabs"
          }
          // onClick={() => toggleTab(1)}
        ></div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          // onClick={() => toggleTab(2)}
        >
          {" "}
        </div>
      </div>
      <div className="content-tabs">
        <StakeModalCompOne toggleState={toggleState} toggleTab={toggleTab} />
        <StakeModalCompTwo toggleState={toggleState} />
      </div>
    </div>
  );
};

//component for Modal Tab 1
const StakeModalCompOne = ({ toggleState, toggleTab }) => {
  const [display, setDisplay] = useState(false);
  const [stakeAmount, setStakeAmount] = useState("");

  const handleChange = (e) => {
    // const { value } = e.target;
    // if (value) {
    //   const formattedValue = (
    //     Number(value.replace(/\D/g, "")) || ""
    //   ).toLocaleString();

    //   setStakeAmount(formattedValue);
    // }
    // return null;
    setStakeAmount(Number(e.target.value));

    if (stakeAmount <= 0) {
      setDisplay(true);
    } else setDisplay(false);
  };

  //Percentage Calculation
  function calcaPercent() {
    const percentCalculation = (stakeAmount * 1.0678).toFixed(2);
    return percentCalculation;
  }
  const estimatedValue = calcaPercent();

  // onSubmit={evt => invest(evt)}
  
  return (
    <div className={toggleState === 1 ? "content active-content" : "content"}>
      <div>
        <p className="heading-smaller">Stake AVS</p>
        <p className="text-light">Enter AVS amount and earn high rewards</p>
      </div>
      <form> 
         <div className="modal_input flex mt-3 justify-between pl-2 pr-2">
            <input
              value={stakeAmount}
              placeholder="Enter amount to stake"
              onChange={handleChange}
              type="number"
              required
            />
            <div className="flex pt-1 pb-1 align-center">
              <span className="mr-1">
                <Icon name={"algovest"} />
              </span>
              <p className=" font-regular text-light">AVS</p>
            </div>
         </div>
            { display &&
                  <div className='flex mt-1 align-center'>
                      <Icon name='alert' size={20} fill='green' /> 
                      <p className='text-smaller'> &nbsp; You don't have enough balance </p>
                  </div>
              }
          <div className="modal-btn">
            <button type='submit' onClick={() => toggleTab(2)} className="btn btn-primary mt-4">
              Connect Wallet
            </button>
          </div>
        
        <EstimationSection
          icon_name="CopyIcon"
          color="green"
          size={45}
          // amount="10,560.00"
          amount={estimatedValue}
          estimated_reward="6.78% (APY) Estimated Reward"
        />
      </form>
    </div>
  );
};

//component for Modal Tab 2
const StakeModalCompTwo = ({ toggleState }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={toggleState === 2 ? "content active-content" : "content"}>
      <div className="">
        <div>
          <p className="heading-smaller">Select Wallet</p>
          <p className="text-smaller">
            Connect your wallet to complete transaction
          </p>
        </div>
        <div className="wallet-cont wallet-type flex align-center pl-2 mt-2">
          <Icon name="metamask" size={40} color="green" />
          <p className="font-large ml-2"> MetaMask </p>
        </div>
        <div className="wallet-cont wallet-type flex align-center pl-2 mt-2">
          <Icon name="walletConnect" size={40} color="green" />
          <p className="font-large ml-2">WalletConnect</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-smaller text-light mb-1">New to Ethereum network?</p>
        <Link href="#">
          <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="flex">
              <p className="font-regular">
                Learn more about Crypto Wallet &nbsp;
              </p>
              <Icon name={"outlink"} color={hover ? "#222222" : "#808080"} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
