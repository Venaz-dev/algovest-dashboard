import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";
import { useState } from "react";
import Web3 from "web3";
import contractAbi from "../../pages/api/contractAbi.json";

const Layout = ({
  children,
  balance,
  setBalance,
  currentAccount,
  setCurrentAccount,
}) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert(
        "No Ethereum browser detected! Install MetaMask extension to continue..."
      );
    }
    console.log("pro", provider);
    return provider;
  };

  // const loadWeb3 = async () => {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     await window.ethereum.enable();
  //   } else {
  //     window.alert(
  //       "Non-Ethereum browser detected. You should consider trying Metamask!"
  //     );
  //   }
  // };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(false);
      onLogin(provider);
    }
  };

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    }

    const networkId = await web3.eth.net.getId();
    if (networkId == 42) {
      // 0x822480D4eFD781C696272F0aca9980395Db72cc0 // address of token
      const contractAddress = "0x822480D4eFD781C696272F0aca9980395Db72cc0";
      const algoPooltokencontract = new web3.eth.Contract(
        contractAbi.abi,
        contractAddress
      );

      //  const nameoftoken = await algoPooltokencontract.methods;
      const rewardToken = await algoPooltokencontract.methods.rewardAPY();
      const rewardTokenmeth = await algoPooltokencontract.methods
        .rewardAPY()
        .method();
      //  const rewardCallToken = await algoPooltokencontract.methods.rewardAPY().call();
      console.log(algoPooltokencontract);
      //  console.log(nameoftoken);
      console.log(rewardToken);
      console.log(rewardTokenmeth);
      //  console.log(rewardCallToken);
    } else {
      window.alert("the contract not deployed to detected network.");
    }
  };
  // const onLogout = () => {
  //   setIsConnected(false);
  // };

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
        {!isConnected && (
          <div className="start_page">
            <p className="mb-3">Connect your wallet to the application</p>
            <button
              onClick={onLoginHandler}
              className="btn btn-black"
              type="button"
            >
              {!isConnecting && "Connect Wallet"}
              {isConnecting && "Loading..."}
            </button>
          </div>
        )}
        {isConnected && (
          <div currentAccount={currentAccount} balance={balance}>
            {children}
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
