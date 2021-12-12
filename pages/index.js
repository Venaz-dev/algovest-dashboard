import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/navigation/Layout";
import Icon from "../components/common/Icons";
import LineChartCompOne from "../components/chart/Chart";
import { StakeModalComp } from "../components/modals/StakeModal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import StakingTable from "../components/tables/StakingTable";
import { Dashboard } from "@material-ui/icons";

export default function Home() {
  // const [loading, setLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [copyAddress, setCopyAddress] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    // <Layout
    //   balance={balance}
    //   currentAccount={currentAccount}
    //   setBalance={setBalance}
    //   setCurrentAccount={setCurrentAccount}
    // >
    <>
      <div className="dashboard">
        <div className="mb-3 description">
          <div className="text">
            <p className="heading-small">Staking Overview</p>
            <p className="text-light">
              Stake your AVS tokens to gain access to USDC Yield Pool while
              earning staking rewards on your locked AVS. The more AVS you
              lockup, the more USDC you can deposit to earn passive income.
            </p>
          </div>
          <button className="btn btn-primary" onClick={openModal}>
            Stake AVS
          </button>
        </div>
        <div className="main-content flex">
          <div className="w-60">
            <p className="font-regular mb-2">Stake’s Stats</p>
            <div className="">
              <div className="stat">
                <p className="text-light">No. of AVS Stakers:</p>{" "}
                <p>
                  <Icon
                    name="TriangleArrowIcon"
                    size={20}
                    color="green"
                    className="mt-3"
                  />
                  <span className="mr-1">4.43%</span>14,302
                </p>
              </div>
              <div className="stat">
                <p className="text-light">Total Staked AVS:</p>{" "}
                <p>
                  <span className="mr-1">
                    <Icon name="algovest" size={15} />
                  </span>{" "}
                  630,069
                </p>
              </div>
              <div className="stat">
                <p className="text-light">
                  AVS Max Supply:{" "}
                  <span className="ml-1">
                    <Icon name="WarningAlert" size={15} />
                  </span>
                </p>
                <p>10,000,000 </p>
              </div>
              <div className="stat">
                <p className="text-light">Contracts:</p>
                <CopyToClipboard
                  text={currentAccount}
                  onCopy={() => {
                    setCopyAddress(true);
                    setTimeout(() => {
                      setCopyAddress(false);
                    }, 4000);
                  }}
                >
                  <p style={{ position: "relative", cursor: "pointer" }}>
                    {" "}
                    <Icon name="EthereumIcon" size={15} />{" "}
                    <span className="text-light mr-1">Ethereum</span>{" "}
                    {currentAccount?.substring(0, 8)}
                    {"..."}{" "}
                    <Icon
                      name="CopyIcon"
                      size={15}
                      color={copyAddress ? "#06aa65" : "#222222"}
                    />{" "}
                    {copyAddress ? (
                      <span
                        style={{
                          color: "#06aa65",
                          position: "absolute",
                          bottom: -15,
                        }}
                      >
                        Copied.
                      </span>
                    ) : null}
                  </p>
                </CopyToClipboard>
              </div>
              <div className="stat">
                <p className="text-light">
                  Staking APY:{" "}
                  <span className="ml-1">
                    <Icon name="WarningAlert" size={15} />
                  </span>
                </p>
                <p> 8% </p>
              </div>
            </div>
          </div>
          <div className="w-40">
            <p className="font-regular ml-3">Average Staking Rate</p>
            <div className="graph">
              <LineChartCompOne />
            </div>
          </div>
        </div>

        <div className="staking-content mt-5">
          {/* <div>
                      <p><a href="/">{currentAccount}</a></p>
                      <p>{balance}</p>
                    </div> */}
          <p className="font-regular mb-3"> Staking Transactions</p>
          <StakingTable />
        </div>
      </div>
      <StakeModalComp
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={closeModal}
      />
    </>
    // </Layout>
  );
}
