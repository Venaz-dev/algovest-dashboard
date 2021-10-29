import Head from "next/head";
import Image from "next/image";
import Layout from "../components/navigation/Layout";
import TextInput from "../components/inputs/TextInput";
import Icon from "../components/common/Icons";
import StakingTransactionComp from "../components/stakingTransaction/StakingTrans";
import YieldPoolComp from "../components/yieldPool/YieldPool";
import SearchInput from "../components/inputs/SearchInput";


export default function Home() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="mb-2 description">
          <div className="text">
            <p className="heading-small">Staking Overview</p>
            <p className="text-light">
              Stake your AVS tokens to gain access to USDC Yield Pool while
              earning staking rewards on your locked AVS. The more AVS you
              lockup, the more USDC you can deposit to earn passive income.
            </p>
          </div>
          <button className="btn btn-primary">Stake AVS</button>
        </div>
        <div className="main-content flex">
          <div className="w-60">
            <p className="font-large ">Stake’s Stats</p>
            <div className="flex justify-between">
              <div className="stats left-content">
                <p>No. of AVS Stakers:</p>
                <p>Total Staked AVS:</p>
                <p>AVS Max Supply: <Icon name="WarningAlert" size={15} /></p>
                <p>Contracts:</p>
                <p>Staking APY: <Icon name="WarningAlert" size={15} /></p>
              </div>
              <div className="stats right-content mr-4 text-right">
                <p> <Icon name="TriangleArrowIcon" size={20} color="green" className="mt-3"/> <span>4.43%</span> &nbsp; 14,302 </p>
                <p> 630,069< /p>
                <p>10,000,000 </p>
                <p> <Icon name="EthereumIcon" size={15} /> <span className="text-light">Ethereum</span> 0x94d9...7b9b3b2 <Icon name="CopyIcon" size={15} /> </p>
                <p> 8% </p>
              </div>
            </div>
          </div>
          <div className="w-40">
            <p className="font-large">Average Staking Rate</p>
            <div>Chart</div>
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
          <p className="font-large"> Staking Transactions</p>
          <div className="flex justify-between w-100">
            <SearchInput  icon_name="SearchRightIcon" size={25} placeholder="Search for amount, APY or rewards"/>
            <button className="btn btn-secondary  w-25">
              <Icon
                name="DownloadIcon"
                size={20}
                className="icon"
              />
              &nbsp; Export
            </button>
          </div>

          <StakingTransactionComp />
        </div>
      </div>
    </Layout>
  );
}
