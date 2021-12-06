import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollDetect } from "../../utils";
import Icons from "../common/Icons";
import NavbarModalComp from "../modals/NavbarModal";

const WelcomeNavLinks = ({ currentAccount }) => {
  const router = useRouter();

  return (
    <div className="nav-links">
      <div className="navs">
        <Link href="/">
          <a>
            <div
              className={`nav-link ${router.pathname == "/" ? "active" : ""}`}
            >
              <p>Staking</p>
            </div>
          </a>
        </Link>
        <Link href="/yieldpool">
          <a>
            <div
              className={`nav-link ${
                router.pathname == "/yieldpool" ? "active" : ""
              }`}
            >
              <p>Yield Pool</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="actions">
        <ul>
          <li>
            <a href="/"> {currentAccount?.substring(0, 10)}... </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const LoginNavLinks = ({ openModal }) => {
  return (
    <div className="nav-links">
      <div className="actions">
        <button onClick={openModal} className="modal-btn">
          <Icons name="triple-dot" />
        </button>
      </div>
    </div>
  );
};

const NavBar = ({ currentAccount, onLoginHandler, isConnected }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    setToggleModal(!toggleModal);
  };
  const closeModal = () => {
    setToggleModal(!toggleModal);
  };

  const { shadow } = useScrollDetect();

  return (
    <div className={`nav-bar ${shadow && "nav-shadow"}`}>
      <div className="nav-section">
        <div className="logo">
          <img src="/assets/images/main_logo.png" alt="" />
        </div>
        <>
          {isConnected ? (
            <WelcomeNavLinks currentAccount={currentAccount} />
          ) : (
            <LoginNavLinks openModal={openModal} />
          )}
        </>
      </div>
      {toggleModal && (
        <NavbarModalComp
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
        />
      )}
    </div>
  );
};

export default NavBar;
