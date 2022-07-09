import Image from 'next/image'
import LoginStyles from '../styles/login_page.module.css'
import {CreateConnectWalletButton} from '../components/connect_wallet_button';
import Head from "next/head";
import React from "react";

export default function Login() {
    return <>
        <Head>
            <title>DLink</title>
        </Head>
        <body className={LoginStyles.login_background}>

        <div>
            {CreateConnectWalletButton()}
        </div>
        </body>
    </>
}
