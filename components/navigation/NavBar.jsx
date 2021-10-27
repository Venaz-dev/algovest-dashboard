import React from "react";
import Link from "next/link";
import { useScrollDetect } from "../../utils";
import Icons from "../common/Icons";

const NavBar = () => {
  const { shadow } = useScrollDetect();
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
                <div className="nav-link">
                  <p>Staking</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="nav-link">
                  <p>Yield Pool</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="actions">
            <button
              className="btn btn-black"
              style={{
                marginLeft: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Connect Wallet
            </button>
            <button>
              <Icons name="triple-dot" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
