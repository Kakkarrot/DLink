import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import {GetStaticProps, GetStaticPaths} from 'next'
import {getWallet} from '../api/firebase_handler'
import React from 'react'

export default function Post({
                                 postData
                             }: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    const [user, setUser] = React.useState("default");

    const testMethod = async () => {
        console.log("here")
        const res = await getWallet({wallet: "0xtest"});
        console.log(res)
        setUser(res.name)
    }

    React.useEffect(() => {
        testMethod()
    })

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div>User: {user}</div>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}
