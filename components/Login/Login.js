import { useState, useEffect } from "react";
import Link from "next/link";
import Web3 from "web3";
import Icon from "../common/Icons";

const ConnectWallet = ({ onLoginHandler }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="select_wallet_modal_overlay">
      <div className="select_wallet_modal-container">
        <div className="">
          <div>
            <p className="font-large">Select a Wallet</p>
            <p className="text-smaller">
              Please select a wallet to connect to the dapp:
            </p>
          </div>
          <button
            onClick={onLoginHandler}
            className="wallet-cont wallet-type flex align-center pl-2 mt-2 w-100"
          >
            <Icon name="metamask" size={40} />
            <p className="font-large ml-2"> MetaMask </p>
          </button>
          <button className="wallet-cont wallet-type flex align-center pl-2 mt-2 w-100">
            <Icon name="walletConnect" size={40} />
            <p className="font-large ml-2">WalletConnect</p>
          </button>
        </div>
        <div className="mt-5">
          <p className="text-smaller text-light mb-1">
            New to Ethereum network?
          </p>
          <Link href="#">
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="flex">
                <p className="text-smaller">
                  Learn more about Crypto Wallet &nbsp;
                </p>
                <Icon name={"outlink"} color={hover ? "#222222" : "#808080"} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Login = ({ onLogined }) => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [provider, setProvider] = useState(window.ethereum);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  const toggleWalletModal = () => {
    setShowWalletModal(!showWalletModal);
  };

  useEffect(() => {
    setProvider(detectProvider());
  }, []);

  useEffect(() => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider.  Do you have multiple wallets installed ?"
        );
      }
      setIsMetaMaskInstalled(true);
    }
  }, []);

  // Detect Provider
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      // Modern DApp browsers
      provider = window.ethereum;
    } else if (window.web3) {
      // Legacy dapp browsers
      provider = window.web3.currentProvider;
    } else {
      // Non-dapp browsers
      console.warn("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    setIsConnecting(true);
    await provider.request({
      method: "eth_requestAccounts",
    });
    setIsConnecting(false);
    //loadBlockChainData
    const onLogin = async (provider) => {
      const web3 = new Web3(
        new Web3.providers.HttpProvider(
          "https://etherscan.io/address/0x822480D4eFD781C696272F0aca9980395Db72cc0"
        )
      );
      window.ethereum.enable();

      console.log("provider", provider);
      const accounts = await web3.eth.getAccounts();
      const chainId = await web3.eth.getChainId();
      if (accounts.length === 0) {
        console.log("Please connect to MetaMask!");
      } else if (accounts[0] !== currentAccount) {
        setProvider(provider);
        setWeb3(web3);
        setChainId(chainId);
        setCurrentAccount(accounts[0]);

        // const accBalanceEth = web3.utils.fromWei(
        //   await web3.eth.getBalance(accounts[0]),
        //   "ether"
        // );

        // setBalance(Number(accBalanceEth).toFixed(6));
        setIsConnected(true);
      }

      const networkId = await web3.eth.net.getId();

      // Load Token
      // const TokenData = contractAbi.networks[chainId]

      if (networkId) {
        // Get the contract instance for the yNFT Token
        // _stablecoin (address): 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
        // 0x822480D4eFD781C696272F0aca9980395Db72cc0 // address of token
        const contractAddress = "0x822480D4eFD781C696272F0aca9980395Db72cc0";
        const algoPooltokencontract = new web3.eth.Contract(
          contractAbi.abi,
          contractAddress
        );

        // calling the contract methods
        const ownerprint = await algoPooltokencontract.methods.owner().call();

        const balanceofuser = await algoPooltokencontract.methods
          .balanceOf(accounts[0])
          .call();
        const balanceofuserinwei = await web3.utils.fromWei(
          balanceofuser,
          "ether"
        );

        // const depositTokenAddr = await algoPooltokencontract.methods.depositToken().call({ from: accounts[0] });
        // const depositContract = new web3.eth.Contract(contractAbi.abi, depositTokenAddr);

        // const rewardTokenAddr = await algoPooltokencontract.methods.rewardToken().call({ from: accounts[0] });
        // const rewardContract = new web3.eth.Contract(contractAbi.abi, rewardTokenAddr);

        // decimal
        // const decimaloftoken = await algoPooltokencontract.methods.decimals().call();

        // symbol
        // const symboloftoken = await algoPooltokencontract.methods.symbol().call()

        // totalsupply
        // const totalsupplyoftoken = await algoPooltokencontract.methods.totalSupply().call();
        // const totalsupplyoftokenindecimals = await web3.utils.fromWei(totalsupplyoftoken,'ether');

        // const balanceofuser = await algoPooltokencontract.methods.balanceOf(accounts[0]).call();
        // const balanceofuserinwei = await web3.utils.fromWei(balanceofuser,'ether')

        console.log(algoPooltokencontract);
        console.log(ownerprint);
        // console.log(depositTokenAddr);
        // console.log(depositContract);
        // console.log(rewardTokenAddr);
        // console.log(rewardContract);
        // console.log(decimaloftoken);
        // console.log(symboloftoken);
        console.log(balanceofuserinwei);
        // console.log(totalsupplyoftokenindecimals);

        // setWeb3(web3);
        // setOwner(await algoPooltokencontract.methods.owner().call({ from: accounts[0] }));
        // setAccounts(accounts);
        // setStakerContract(algoPooltokencontract);
        // setDepositTokenContract(depositContract);
        // setRewardTokenContract(rewardContract);
        // setTokenDecimal(decimaloftoken);
        // setTokenSymbol(symboloftoken);
        // setBalanceOfUser(balanceofuserinwei);
        // setTotalSupplyOfTokens(totalsupplyoftokenindecimals)
      } else {
        window.alert("DaiToken contract not deployed to detected network.");
      }
    };
    onLogin(provider);
  };

  return (
    <>
      {isMetaMaskInstalled && (
        <div className="start_page">
          <p className="mb-3">Connect your wallet to the application</p>
          <button
            onClick={toggleWalletModal}
            className="btn btn-black"
            type="button"
          >
            {!isConnecting && "Connect Wallet"}
            {isConnecting && "Loading..."}
          </button>
          {showWalletModal && <ConnectWallet onLoginHandler={onLoginHandler} />}
        </div>
      )}

      {!isMetaMaskInstalled && (
        <div>
          <p className="start_page">
            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
              Install MetaMask
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
