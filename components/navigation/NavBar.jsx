import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useScrollDetect } from "../../utils";
import Icons from "../common/Icons";
import NavbarModalComp from '../modals/NavbarModal';

const NavBar = () => {
  const [toggleModal, setToggleModal] = useState(false);
    
    const openModal = () => {
        setToggleModal(!toggleModal);
    }
    const closeModal = () => {
        setToggleModal(!toggleModal);
    }

  const { shadow } = useScrollDetect();

  const router = useRouter();

  return (
    <div className={`nav-bar ${shadow && "nav-shadow"}`}>
      <div className="nav-section">
        <div className="logo">
          <img src="/assets/images/main_logo.png" alt="" />
        </div>
        <div className="nav-links">
          <div className="navs">
            <Link href="/">
              <a>
                <div className={router.pathname == "/" ? "active" : "nav-link"}>
                  <p>Staking</p>
                </div>
              </a>
            </Link>
            <Link href="/yieldpool">
              <a>
                <div className={router.pathname == "/yieldpool" ? "active" : "nav-link"}>
                  <p>Yield Pool</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="actions">
            <button
              className="btn btn-black mr-2"
              style={{
                marginLeft: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Connect Wallet
            </button>
            <button onClick={openModal}
              className='modal-btn'>
              <Icons name="triple-dot" />
            </button>
          </div>
        </div>
      </div>
      { toggleModal && 
        <NavbarModalComp />
      }
    </div>
  );
};

export default NavBar;
