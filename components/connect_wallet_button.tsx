import Head from "next/head";
import styles from "../styles/connect_wallet_button.module.css";
import React from "react";

// declare global {
//     interface Window {
//         ethereum:any;
//     }
// }
// let ethereum = window.ethereum;
// const web3 = require('web3');
let Eth = require('web3-eth');

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
let eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');

export function CreateConnectWalletButton() {
    const [walletAddress, setWalletAddress] = React.useState<string>("Connect Wallet");

    React.useEffect(() => {
        async function checkConnection() {
            console.log("check connection")
            await eth.getAccounts(function(err, accounts){
                if (err != null) console.error("An error occurred: "+err);
                else if (accounts.length == 0) console.log("No wallet is connected. ");
                else {
                    console.log("Wallet is connected.");
                    setWalletAddress(accounts[0]);
                    //TODO: make this change dynamically when metamask changes accounts
                }
            });
        }
        checkConnection();

        // Web3 Browswer Detection
        if (typeof (window as any).ethereum !== "undefined") {
            console.log("Injected Web3 Wallet is installed!");
        }

        //Button ID
        const connectButton = document.getElementById("connect");

        //Click Event
        connectButton.addEventListener("click", () => {
            connectAccount();
        });

        //Connect Account Function
        async function connectAccount() {
            const accounts = await (window as any).ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log(accounts)
            const account = accounts[0];
            connectButton.innerHTML =
                account[0] +
                account[1] +
                account[2] +
                account[3] +
                account[4] +
                account[5] +
                "..." +
                account[38] +
                account[39] +
                account[40] +
                account[41];
        }
    }, []);

    return (
        <button className={styles.connect} id="connect">
            {walletAddress}
        </button>
    );
}