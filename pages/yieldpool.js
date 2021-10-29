import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Icon from "../components/common/Icons";
import YieldPoolComp from "../components/yieldPool/YieldPool";
import SearchInput from "../components/inputs/SearchInput";

export default function YieldPoolPage() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="mb-2 flex description">
          <div className="text">
            <p className="heading-small">High-Yield Pool Overview</p>
            <p className="text-light">
              Deposit USDC to start earning while enjoying built-in deposit
              protection. Pool More, Earn More!
            </p>
          </div>
          <button className="btn btn-primary">Desposit USDC</button>
        </div>
        <div className="pool_stats_container flex">
          <div className="w-50">
            <p className="font-large"> Pool's Stats</p>
            <div className="flex justify-between">
              <div className="stats left-content">
                <p>Total Deposits</p>
                <p>Active Deposits</p>
                <p>Total Interest Payout</p>
                <p>Yield Pool Available</p>
                <p>Lockup Period</p>
                <p>Yield Source</p>
                <p>Yield APY</p>
              </div>
              <div className="stats right-content mr-4 text-right">
                <p>40.260</p>
                <p>37,194.09</p>
                <p>100,587.21</p>
                <p>3 Pools</p>
                <p>8 - 24 weeks</p>
                <p>AlgoVest</p>
                <p>20% - 60% APY</p>
              </div>
            </div>
          </div>
          <div className="w-50">
            <p className="font-large">Average Deposit Rate</p>
            <div className="chart">Chart</div>
          </div>
        </div>

        <div className="yield-content mt-5">
          <p className="font-large"> Yield Pool Transcations</p>
          <div className="flex justify-between w-100">
            <SearchInput  icon_name="SearchRightIcon" size={20} placeholder="Search for amount, APY or rewards"/>
            <button className="btn btn-secondary  w-25">
              <Icon
                name="DownloadIcon"
                size={20}
                className="icon"
                color="#fff"
              />
              Export
            </button>
          </div>
          <YieldPoolComp />
        </div>
      </div>
    </Layout>
  );
}
