import Head from 'next/head'
import {GetServerSideProps} from 'next'
import {getWallet} from '../api/firebase_handler'
import React from 'react'
import {Avatar, Button} from "@mui/material";
import profileStyles from '../../styles/profile.module.css';


export default function Post({postData}: {
    postData: {
        name: string
    }
}) {
    const [user, setUser] = React.useState("default");

    React.useEffect(() => {
    })

    return (
        // <Layout>
        //     <Head>
        //         <title>DLink</title>
        //     </Head>
        //     <div>User: {user}</div>
        //     <div>Name: {postData.name}</div>
        // </Layout>
        <>
            <Head>
                <title>DLink</title>
            </Head>
            <div className={profileStyles.pageWidth}>
                <h1>
                    David Zhang
                </h1>
                <Avatar
                    alt="Remy Sharp"
                    src="/images/profile.jpg"
                    className={profileStyles.avatarStyle}
                />
                <Button
                    className={profileStyles.linkStyle}
                >Contained</Button>
            </div>
            <div>User: {user}</div>
            <div>Name: {postData.name}</div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const postData = await getWallet({wallet: params.wallet});
    return {
        props: {
            postData
        }
    }
}
