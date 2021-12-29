import React, { useState, useRef, useEffect } from "react";
import Icon from "../common/Icons";
import Link from "next/link";
import { EstimationSection } from "./StakeModal";

// Modal for Yield Pool Page
const YieldPoolModalComp = ({ showModal, setShowModal, closeModal }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="modal_overlay">
          <div className="modal-cont" ref={ref}>
            <div className="close-icon flex-end" onClick={closeModal}>
              <Icon name="close-modal" size={20} />
            </div>
            <YieldPoolModal />
          </div>
        </div>
      )}
    </>
  );
};

export default YieldPoolModalComp;

// Modals for YieldPool
export const YieldPoolModal = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const [selectOption, setSelectOption] = useState(0);
  const [items, setItems] = useState({ duration: "0 weeks", percent: "0" });
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [stepIndex, setStepIndex] = useState(0);

  const switchTab = (ind) => {
    setToggleTab(ind);
    setShow(true);
  };

  const returnTab = () => {
    if (toggleTab > 1) {
      if (toggleTab === 2) {
        setShow(false);
      }
      setToggleTab(toggleTab - 1);
    }
  };

  return (
    <div className="modal-container w-30">
      {show ? (
        <div className="return_tab" onClick={returnTab}>
          <Icon name={"ChevronLeft"} size={23} />
          <p>Go back</p>
        </div>
      ) : null}
      <div className="modal-tabs flex">
        <div
          className={toggleTab === 1 ? "tabs active-tabs" : "tabs active-tabs"}
        ></div>
        <div
          className={
            toggleTab === 2
              ? "tabs active-tabs"
              : `${toggleTab === 3 ? "tabs active-tabs" : "tabs"}`
          }
        ></div>
        <div className={toggleTab === 3 ? "tabs active-tabs" : "tabs"}></div>
      </div>
      <div className="content-tabs">
        <YieldPoolModalCompOne
          toggleTab={toggleTab}
          setSelectOption={setSelectOption}
          setItems={setItems}
          switchTab={switchTab}
        />
        <YieldPoolModalCompTwo
          toggleTab={toggleTab}
          items={items}
          switchTab={switchTab}
        />
        <YieldPoolModalCompThree toggleTab={toggleTab} />
      </div>
    </div>
  );
};

const YieldPoolModalCompOne = ({
  toggleTab,
  setItems,
  switchTab,
  setSelectOption,
}) => {
  return (
    <div className={toggleTab === 1 ? "content active-content" : "content"}>
      <div>
        <p className="heading-smaller mb-1">USDC Yield Pool</p>
        <p className="text-light">Choose a pool and deposit any amount.</p>
      </div>

      <div className="yeild-options">
        <div
          className="option"
          onClick={() => {
            setSelectOption(1);
            switchTab(2);
            setItems({ duration: "8 weeks", percent: "20" });
          }}
        >
          <p className="heading-smaller"> 20% APR </p>

          <div className="flex">
            <div className="flex align-center">
              <Icon name="lock" size={20} />
              <p className="desc ml-1"> 8 weeks lockup period </p>
            </div>
            {/* <span className="ml-2 mr-2 desc"> | </span> */}
            <div className="flex">
              <Icon name="token" size={20} />
              <p className="text-small ml-1"> USDC </p>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={() => {
            setSelectOption(1);
            switchTab(2);
            setItems({ duration: "16 weeks", percent: "40" });
          }}
        >
          <p className="heading-smaller"> 40% APR </p>
          <p className="recommended">Recommended</p>
          <div className="flex">
            <div className="flex align-center">
              <Icon name="lock" size={20} />
              <p className="desc ml-1"> 16 weeks lockup period </p>
            </div>
            {/* <span className="ml-2 mr-2 desc"> | </span> */}
            <div className="flex">
              <Icon name="token" size={20} />
              <p className="text-small ml-1"> USDC </p>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={() => {
            setSelectOption(3);
            switchTab(2);
            setItems({ duration: "24 weeks", percent: "60" });
          }}
        >
          <p className="heading-smaller"> 60% APR </p>

          <div className="flex">
            <div className="flex align-center">
              <Icon name="lock" size={20} />
              <p className="desc ml-1"> 24 weeks lockup period </p>
            </div>
            {/* <span className="ml-2 mr-2 desc"> | </span> */}
            <div className="flex">
              <Icon name="token" size={20} />
              <p className="text-small ml-1"> USDC </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YieldPoolModalCompTwo = ({ toggleTab, items, switchTab }) => {
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");

  const handleChange = (e) => {
    setDepositAmount(Number(e.target.value));

    // check balance
    if (depositAmount <= 0) {
      setErrorDisplay(true);
    } else setErrorDisplay(false);
  };

  //Percentage Calculation
  function calcaPercent() {
    // The percentage we wnat to get
    let percentToGet = (Number(items.percent) + 100) / 100;
    const percentCalculation = (percentToGet * depositAmount).toFixed(2);

    return percentCalculation;
  }
  const estimatedValue = calcaPercent();

  // valdating input fiels
  function connectWalletClick(e) {
    e.preventDefault();

    if (depositAmount.trim() === "") {
      //you can make more validations here
      return;
    }
    //down here use the rest of logic
  }

  return (
    <div className={toggleTab === 2 ? "content active-content" : "content"}>
      <div>
        <p className="heading-smaller mb-1">Deposit USDC</p>
        <p className="text-light">
          Enter USDC amount and earn high cumulative interest.
        </p>
      </div>
      {/* <ModalInputSection 
                token='USDC' 
                value={depositAmount} 
                placeholder='0.00' 
                size={20}
                onChange={handleChange} 
            />  */}
      <form>
        <div className="modal_input flex mt-3 justify-between pl-2 pr-2">
          <input
            value={depositAmount}
            placeholder="0.00"
            onChange={handleChange}
          />
          <div className="flex pt-1 pb-1 align-center">
            <Icon name={"token"} size={20} /> &nbsp;
            <p className="font-bold font-regular"> USDC </p>
          </div>
        </div>
        {errorDisplay && (
          <div className="flex mt-1 align-center">
            <Icon name="alert" size={20} fill="green" />
            <p className="text-smaller">
              {" "}
              &nbsp; You don&apos;t have enough balance{" "}
            </p>
          </div>
        )}
        <div className="lockup-period-label mt-5 flex align-center justify-between pl-3 pr-3">
          <div className="flex">
            <Icon name="lock" size={20} />
            <p className="ml-1"> {items.duration} lockup period</p>
          </div>
          <div>
            <p> @{items.percent}% APR</p>
          </div>
        </div>
        <div className="modal-btn">
          <button
            type="button"
            onClick={(e) => {
              connectWalletClick;
              switchTab(3);
            }}
            className="btn btn-primary mt-4"
          >
            {" "}
            Connect Wallet{" "}
          </button>
        </div>
      </form>

      <EstimationSection
        icon_name="CopyIcon"
        color="green"
        size={45}
        amount={estimatedValue}
        estimated_reward={`${items.percent}% APR Estimated Earnings`}
      />
    </div>
  );
};

const YieldPoolModalCompThree = ({ toggleTab }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={toggleTab === 3 ? "content active-content" : "content"}>
      <div className="">
        <div>
          <p className="heading-smaller">Select Wallet</p>
          <p className="text-light">
            Connect your wallet to complete transaction.
          </p>
        </div>
        <div className="wallet-cont wallet-type flex align-center pl-2 mt-2">
          <Icon name="metamask" size={45} color="green" />
          <p className="font-large ml-2"> MetaMask </p>
        </div>
        <div className="wallet-cont wallet-type flex align-center pl-2 mt-2">
          <Icon name="walletConnect" size={45} color="green" />
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
