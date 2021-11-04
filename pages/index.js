import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/navigation/Layout";
import Icon from "../components/common/Icons";
import StakingTransactionComp, {
  TableComp,
} from "../components/stakingTransaction/StakingTrans";
import SearchInput from "../components/inputs/SearchInput";
import LineChartCompOne from "../components/chart/Chart";
import { StakeModalComp } from "../components/modals/StakeModal";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [copyAddress, setCopyAddress] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Layout>
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
                  <span>4.43%</span> &nbsp; 14,302{" "}
                </p>
              </div>
              <div className="stat">
                <p className="text-light">Total Staked AVS:</p> <p> 630,069</p>
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
                  text={"0x94d916873b22c9c1b53695f1c002f78537b9b3b2"}
                  onCopy={() => {
                    setCopyAddress(true);
                    setTimeout(() => {
                      setCopyAddress(false);
                    }, 4000);
                  }}
                >
                  <p style={{ position: "relative" }}>
                    {" "}
                    <Icon name="EthereumIcon" size={15} />{" "}
                    <span className="text-light mr-1">Ethereum</span>{" "}
                    0x94d916873b...{" "}
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
        {/* <p className="text-light text-small">
              Stake AVS and earn high rewards
            </p>
            <div className="mb-4">
              <TextInput
                placeholder="1,000,000.90"
                activeBorderColor="#06aa65"
                beforeText="Amount of AVS to stake"
              />
            </div>
            <div className="mb-4">
              <TextInput
                placeholder="1,000,000.90"
                activeBorderColor="#06aa65"
                beforeText="Amount of AVS to stake"
              />
            </div>
            <button className="btn btn-primary">Stake Now</button> */}
        <div className="staking-content mt-5">
          <p className="font-regular mb-3"> Staking Transactions</p>
          <div className="flex justify-between w-100">
            <SearchInput
              icon_name="SearchRightIcon"
              size={25}
              placeholder="Search for amount, APY or rewards"
            />
            <button className="btn btn-gray  w-25" style={{ fontSize: 17 }}>
              <Icon name="DownloadIcon" size={20} className="icon" />
              &nbsp; Export
            </button>
          </div>

          <StakingTransactionComp />
        </div>
      </div>

      <StakeModalComp showModal={showModal} closeModal={closeModal} />
      <TableComp />
    </Layout>
  );
}
