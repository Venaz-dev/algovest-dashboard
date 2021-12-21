import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";
import { useState, useEffect } from "react";
import initWeb3 from '../../initWeb3'
import yNFT from "../../pages/api/yNFT.json";

const Layout = ({
  // children,
  // balance,
  // setBalance,
  // currentAccount,
  // setCurrentAccount,
}) => {

  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [web3, setWeb3] = useState();
const [Avscoin, setAvscoin] = useState();
const [accounts, setAccounts] = useState(null);
const [Avscoinbalance, setAvscoinBalance] = useState(0);
const [yNFT, setyNFT] = useState(0);
const [PoolLength, setPoolLength] = useState(0);
const [balance, setBalance] = useState(0);


const init = async () => {
    if (isReady()) {
      return;
    }

    setLoading(true); 
    let web3;
    try {
      web3 = await initWeb3();
    } catch (err) {
      console.error(err);
      setLoading(false);
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    if (networkId !== 1) {
      setError("Please connect Mainnet account");
      setLoading(false);
      return;
    }

    const Avscoin = new web3.eth.Contract(
        ERC20.abi,
        "0x1dd80016e3d4ae146ee2ebb484e8edd92dacc4ce"
      ); //mainnet address for lead token
    //   const totalSupply = await Avscoin.methods.totalSupply().call();
      const Avscoinbalance = await Avscoin.methods.balanceOf(accounts[0]).call();
  
  
      const yNft = new web3.eth.Contract(
        contractAbi.abi,
        "0x822480D4eFD781C696272F0aca9980395Db72cc0"
      ); //mainnet adddress for staking dapp

  

    window.ethereum.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
    });

    setLoading(false);
  };

  const isReady = () => {
    return !!leadStake && !!web3 && !!accounts;
  };

  useEffect(() => {
    const triggerAlreadyInjectedWeb3 = async () => {
      if (window.ethereum) {
        if (
          window.ethereum.selectedAddress &&
          window.ethereum.networkVersion === "3"
        ) {
          await init();
        }
      }
    };
    triggerAlreadyInjectedWeb3();
  }, []);

  async function updateAll() {
    await Promise.all([
      updateStakes(),
      updateAvscoinBalance(),
      updateTotalSupply,
    ]);
  }

  useEffect(() => {
    if (isReady()) {
      updateAll();
    }
  }, [yNFT, Avscoin, web3, accounts, Avscoinbalance]);

  async function updateStakes() {
    const stake = await leadStake.methods.stakes(accounts[0]).call();
    setStakes(stake);
    return stake;
  }

  
  async function updateAvscoinBalance() {
    if (Avscoin) {
      const balance = await Avscoin.methods.balanceOf(accounts[0]).call();
      setBalance(balance);
      return balance;
    }
  }
  

  async function updateTotalSupply() {
    if (Avscoin) {
      const totalSupply = await Avscoin.methods.totalSupply().call();
      setTotalSupply(totalSupply);
      return totalSupply;
    }
  }

//   async function updateTotalStaked() {
//     if (yNFT) {
//       const totalStaked = await yNFT.methods.totalStaked().call();
//       return totalStaked;
//     }
//   }

// ***************************    ONLY ADMIN CAN CALL THIS FUNCTIONS    ********************************


// admin addReward function
async function addreward() {
  setStakeLoading(true);
  const actual = amount * (10 ** 18);
  const arg = fromExponential(actual);
  try {
    await AvsToken.methods
      .approve("0x0", arg)
      .send({ from: accounts[0] });
      
    await yNFT.methods.addRewards(arg).send({ from: accounts[0] });
    await updateAll();
  } catch (err) {
    if (err.code !== 4001) {
      setShowModal(true);
    }
    console.error(err);
  }
  setStakeLoading(false);
}

// admin set staking Amount
async function stakingAmount(newPeriod) {
  setLoading(true)
  try {
    await yNFT.methods.setStakingAmount(newPeriod).send({from: accounts[0]});
    await updateAll();
  }catch (err) {
    if (err.code !== 4001) {
      setShowModal(true)
    }
    console.error(err);
  }
  setLoading(false);
}

// admin create pool function
  async function poolCreate (
    periodInterestRate,
    noncesToUnlock,
    locked){
    setLoading(true)
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await yNFT.methods.createPool(arg, periodInterestRate,noncesToUnlock,locked).send({from: accounts[0]});
      await updateAll();
    }catch (err) {
      if (err.code !== 4001) {
        setShowModal(true)
      }
      console.error(err);
    }
    setLoading(false);
  }

  // admin lock a specific pool 
  async function poolLock(pool_id, lock) {
    setLoading(true)
    try {
      await yNFT.methods.lockPool(pool_id, lock).send({from: accounts[0]});
      await updateAll();
    }catch (err) {
      if (err.code !== 4001) {
        setShowModal(true)
      }
      console.error(err);
    }
    setLoading(false);
  }


  // withdraw to Trading Admin function
  async function tradingWithdraw() {
    setStakeLoading(true);
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await AvsToken.methods
        .approve("0x0", arg)
        .send({ from: accounts[0] });
        
      await yNFT.methods. withdrawToTradingAdmin(arg).send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  }

  // deposit Admin function
  async function adminDeposit() {
    setStakeLoading(true);
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await AvsToken.methods
        .approve("0x0", arg)
        .send({ from: accounts[0] });
        
      await yNFT.methods.depositAdmin(arg).send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  }

  // deposit stablecoin function
  async function stableDeposit() {
    setStakeLoading(true);
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await AvsToken.methods
        .approve("0x0", arg)
        .send({ from: accounts[0] });
        
      await yNFT.methods.depositStableCoin(arg).send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  }


  // change nonce period
  async function nonce(newPeriod) {
    setLoading(true)
    try {
      await yNFT.methods.changeNoncePeriod(newPeriod).send({from: accounts[0]});
      await updateAll();
    }catch (err) {
      if (err.code !== 4001) {
        setShowModal(true)
      }
      console.error(err);
    }
    setLoading(false);
  }

  // ***************************    UsSERS CAN CALL THIS FUNCTIONS    ********************************

   //deposit to pool function
async function stakeAvs() {
    setStakeLoading(true);
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await AvsToken.methods
        .approve("0x0", arg)
        .send({ from: accounts[0] });
        
      await yNFT.methods.depositAvsToken(arg).send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  }

  //deposit to pool function
  async function unstakeAvs() {
    setStakeLoading(true);
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await AvsToken.methods
        .approve("0x0", arg)
        .send({ from: accounts[0] });
        
      await yNFT.methods.withdrawAvsToken(arg).send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  }


  // deposit to pool
  async function poolDeposit(pool_id) {
    setStakeLoading(true);
    const actual = amount * (10 ** 18);
    const arg = fromExponential(actual);
    try {
      await AvsToken.methods
        .approve("0x0", arg)
        .send({ from: accounts[0] });
        
      await yNFT.methods.depositToPool(pool_id, arg).send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  } 

  // withdraw principal function 
    async function principalWithdraw(bond_id) {
        setUnstakeLoading(true);
        try {  
          await yNFT.methods.withdrawPrinciple(bond_id).send({ from: accounts[0] });
          await updateAll();
        } catch (err) {
          if (err.code !== 4001) {
            setShowModal(true);
          }
          console.error(err);
        }
        setUnstakeLoading(false);
      }


      // Claim interest function
    async function interestClaim(bond_id) {
          setUnstakeLoading(true);
          try {       
            await yNFT.methods.claimInterest(bond_id).send({ from: accounts[0] });
            await updateAll();
          } catch (err) {
            if (err.code !== 4001) {
              setShowModal(true);
            }
            console.error(err);
          }
          setUnstakeLoading(false);
        }

      setWeb3(web3);
      setAccounts(accounts);
      setyNft(yNft);
      setAvscoin(Avscoin);
      setAvscoinbalance(Avscoinbalance);
      setBalance(balance);
      setPoolLength(PoolLength)

  return (
    <div className="layout">
      <Head>
        <title>AlgoVest</title>
        <meta name="description" content="AlgoVest" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar
        onLogin={onLogin}
        // onLogout={onLogout}
        currentAccount={currentAccount}
        isConnected={isConnected}
        onLoginHandler={onLoginHandler}
      />
      <main className="children">
        {!accounts && (
          <div className="start_page">
            <p className="mb-3">Connect your wallet to the application</p>
            <button
               onClick={async () => await init()}
              className="btn btn-black"
              type="button"
            >
              {/* {!isLoading && "Wallet Connecting"}
              {isConnecting && "Loading..."} */}
            </button>
          </div>
        )}
        {isaccount && (
          <div accounts={accounts} balance={balance} >
            {children}
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
