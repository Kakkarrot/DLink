import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {CreateConnectWalletButton} from "../components/connect_wallet_button";

export default function Home() {
    const walletAddress: string = "0xother"

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this in{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <Link href={'/login'}>Login Page</Link>
            <br/>
            <Link href={`/posts/${walletAddress}`}>Profile Page</Link>
            <div>
                {CreateConnectWalletButton()}
            </div>
        </Layout>
    )
}

