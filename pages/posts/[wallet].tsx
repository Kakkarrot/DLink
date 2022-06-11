import Layout from '../../components/layout'
import Head from 'next/head'
import {GetServerSideProps} from 'next'
import {getWallet} from '../api/firebase_handler'
import React from 'react'

export default function Post({postData}: {
    postData: {
        name: string
    }
}) {
    const [user, setUser] = React.useState("default");

    const testMethod = async () => {
        console.log("here")
        const res = await getWallet({wallet: "0xtest"});
        console.log("RES: ", res)
        setUser(res.name)
        console.log("postdata: ", postData)
    }

    React.useEffect(() => {
    })

    return (
        <Layout>
            <Head>
                <title>{postData.name}</title>
            </Head>
            <div>User: {user}</div>
            <div>Name: {postData.name}</div>
        </Layout>
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
