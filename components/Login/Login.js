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

const Login = ({ onLogin }) => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [provider, setProvider] = useState();
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
