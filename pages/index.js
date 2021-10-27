import Head from "next/head";
import Image from "next/image";
import Layout from "../components/navigation/Layout";
import TextInput from "../components/inputs/TextInput";

export default function Home() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="mb-2 flex description">
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
        <div className="main-content">
          <div className="sidebar">
            <p className="font-regular ">Stake’s Stats</p>
            <p className="text-light text-small">
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
            <button className="btn btn-primary">Stake Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
