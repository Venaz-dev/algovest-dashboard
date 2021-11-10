import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/navigation/Layout";
import Icon from "../components/common/Icons";

import SearchInput from "../components/inputs/SearchInput";
import LineChartCompOne from "../components/chart/Chart";
import YieldPoolModalComp from "../components/modals/YieldPoolModal";
import YieldTable from "../components/tables/YieldTable";

export default function YieldPoolPage() {
  const [showModal, setShowModal] = useState(false);

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
            <p className="heading-small">High-Yield Pool Overview</p>
            <p className="text-light">
              Deposit USDC to start earning while enjoying built-in deposit
              protection. Pool More, Earn More!
            </p>
          </div>
          <button className="btn btn-primary" onClick={openModal}>
            Desposit USDC
          </button>
        </div>
        <div className="main-content flex">
          <div className="w-60">
            <p className="font-regular mb-2">Pool&apos;s Stats</p>
            <div className="">
              <div className="stat">
                <p className="text-light">Total Deposits:</p>{" "}
                <p>
                  <span className="mr-1">
                    <Icon name="token" />
                  </span>
                  40.260
                </p>
              </div>
              <div className="stat">
                <p className="text-light">Active Deposits:</p>{" "}
                <p>
                  <span className="mr-1">
                    <Icon name="token" />
                  </span>
                  37,194.09
                </p>
              </div>
              <div className="stat">
                <p className="text-light"> Total Interest Payout</p>{" "}
                <p>
                  <span className="mr-1">
                    <Icon name="token" />
                  </span>
                  100,587.21
                </p>
              </div>
              <div className="stat">
                <p className="text-light"> Yield Pool Available:</p>{" "}
                <p>3 Pools</p>
              </div>
              <div className="stat">
                <p className="text-light">
                  Lockup Period:{" "}
                  <span className="ml-1">
                    <Icon name="WarningAlert" size={15} />
                  </span>
                </p>{" "}
                <p>8 - 24 weeks</p>
              </div>
              <div className="stat">
                <p className="text-light">
                  Yield Source:{" "}
                  <span className="ml-1">
                    <Icon name="WarningAlert" size={15} />
                  </span>
                </p>
                <p>
                  <span className="mr-1">
                    <img src="/assets/images/algovest-icon.png" />
                  </span>
                  AlgoVest
                </p>
              </div>
              <div className="stat">
                <p className="text-light">
                  Yield APY:{" "}
                  <span className="ml-1">
                    <Icon name="WarningAlert" size={15} />
                  </span>
                </p>
                <p>20% - 60% APY</p>
              </div>
            </div>
          </div>

          <div className="w-40">
            <p className="font-regular ml-3">Average Deposit Rate</p>
            <div className="graph">
              <LineChartCompOne />
            </div>
          </div>
        </div>

        <div className="yield-content mt-5">
          <p className="font-regular mb-3"> Yield Pool Transcations</p>
          <div className="flex justify-between w-100 mb-3">
            <SearchInput
              icon_name="SearchRightIcon"
              size={20}
              placeholder="Search for amount, APY or rewards"
            />
            <button className="btn btn-gray  w-25" style={{ fontSize: 17 }}>
              <Icon name="export" className="icon" color="#fff" /> &nbsp; Export
            </button>
          </div>
          {/* <YieldPoolComp /> */}
          <YieldTable />
          {/* <YieldTable /> */}
        </div>
      </div>
      <YieldPoolModalComp showModal={showModal} closeModal={closeModal} />
    </Layout>
  );
}
