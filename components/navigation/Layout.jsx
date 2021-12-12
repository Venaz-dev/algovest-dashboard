import React, { useState, useEffect } from "react";
// import Link from "next/link";
import NavBar from "./NavBar";
import Head from "next/head";
import Web3 from "web3";
import Login from "../Login/Login";
import contractAbi from "../../utils/contractAbi.json";

// if (typeof window !== 'undefined') {
//   // You now have access to `window`
// }
const Layout = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(window.ethereum || {});
  const [chainId, setChainId] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [balance, setBalance] = useState(0);

  const [stakerContract, setStakerContract] = useState(null);
  const [depositTokenContract, setDepositTokenContract] = useState(null);
  const [rewardTokenContract, setRewardTokenContract] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [owner, setOwner] = useState(null);
  const [TokenSymbol, setTokenSymbol] = useState("");
  const [TokenDecimal, setTokenDecimal] = useState("");
  const [BalanceOfUser, setBalanceOfUser] = useState(0);
  const [TotalSupplyOfTokens, setTotalSupplyOfTokens] = useState(0);

  const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
  };

  useEffect(() => {
    if (typeof window === "undefined") return null;
    const handleAccountsChanged = async (accounts) => {
      const web3Accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        onLogout();
      } else if (accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0]);
      }
    };

    const handleChainChanged = async (chainId) => {
      const web3ChainId = await web3.eth.getChainId();
      setChainId(web3ChainId);
    };

    if (isConnected) {
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (isConnected) {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [isConnected]);

  // Arg [0] : _stablecoin (address): 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
  // Arg [1] : name (string): AlgoPool YieldNFT
  // Arg [2] : symbol (string): yNFT
  // Arg [3] : _avscoin (address): 0x94d916873b22c9c1b53695f1c002f78537b9b3b2

  // const invest = async e => {
  //   e.preventDefault();
  //   await stakingPool.invest(
  //     {value: e.target.elements[0].value}
  //   );
  //   const amountInvested = await stakingPool.balances(signerAddress);
  //   setAmountInvested(amountInvested);
  // };

  // const networkId = await web3.eth.net.getId();

  // if (networkId == 1) {
  //        const contractAddress =  "0x822480D4eFD781C696272F0aca9980395Db72cc0";
  //        const algoPooltokencontract = new web3.eth.Contract(contractAbi.abi, contractAddress);

  //        const tokenmethods = await algoPooltokencontract.methods;
  //        const ownerprint = await algoPooltokencontract.methods.owner().call();
  //       //  const rewardTokenmeth = await algoPooltokencontract.methods.rewardAPY().call();
  //       //  const rewardCallToken = await algoPooltokencontract.methods.rewardAPY().call();
  //        console.log(algoPooltokencontract);
  //        console.log(tokenmethods);
  //        console.log(ownerprint);
  //       //  console.log(rewardTokenmeth);
  //       //  console.log(rewardCallToken);

  // } else {
  //      window.alert("the contract not deployed to detected network.");
  // }

  const onLogout = () => {
    setIsConnected(false);
    setCurrentAccount(null);
  };

  const getCurrentNetwork = (chainId) => {
    return NETWORKS[chainId];
  };

  return (
    <div className="layout">
      <Head>
        <title>AlgoVest</title>
        <meta name="description" content="AlgoVest" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar
        onLogin={onLogin}
        onLogout={onLogout}
        currentAccount={currentAccount}
        isConnected={isConnected}
        currentNetwork={getCurrentNetwork(chainId)}
      />
      <main className="children">
        {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
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

// const factory = await new ethers.Contract(tokenAddress, tokenAbi, provider);
// const erc20 = await factory.attach(tokenAddress); //This will prompt the approval transaction to be approve

// await contract.connect(signer).deposit(depositamount, tokenAddress);

// function deposit(uint _amount, address _token) external {
//   IERC20 depositor =  IERC20(_token);
//   depositor.transferFrom(msg.sender, address(this), _amount);

// }
