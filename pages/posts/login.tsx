import Image from 'next/image'
import LoginStyles from '../../styles/login_page.module.css'
import {CreateConnectWalletButton} from '../../components/connect_wallet_button';

export default function Login() {
    return <>
        <body className={LoginStyles.login_background}>
        <div>
            {CreateConnectWalletButton()}
        </div>
        </body>
    </>
}