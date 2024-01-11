import React, {useEffect} from 'react';
import Navigation from "../components/Link/navigation";
import {MAIN_ROUTE, NEWS_ROUTE} from "../utils/const";
import {fetchNews} from "../http/newsAPI";
import Loader from "../components/Link/loader";
import dateFormat from "dateformat";
import {Translate} from "../hocks/translate";
import Link from "next/link";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Link/feedback'));

const News = ({resNews, loader}) => {

    if (!loader) {
        return <Loader/>
    }

    return (
        <section className={'page_news'}>
            <Head>
                <title>Новости ТК Ювента</title>
                <meta name="description" content="Новости Транспортной компании Ювента"/>

                <meta property="og:title" content="Новости ТК Ювента"/>
                <meta property="og:description" content="Новости Транспортной компании Ювента"/>
            </Head>

            <div className={'container'}>
                <Navigation data={[{name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1}, {name: 'Новости', href: null, number: Date.now() * 1.2}]}/>
            </div>

            <div className={'container'}>

                <div className={'page_news_grid'}>

                    {resNews.rows.map(n =>
                        <Link href={NEWS_ROUTE + '/' + Translate(n.title) + '/' + n.id} key={n.id}>
                            <div className={'page_news_content'}>
                                <div>
                                    <p className={'page_news_date'}>
                                        {dateFormat(n.createdAt, "dd mmmm yyyy")}
                                    </p>
                                    <div className={'page_news_title'}>
                                        {n.title}
                                    </div>
                                    <div className={'page_news_description'}>
                                        {n.description}
                                    </div>

                                    <div className={'page_news_arrow'}>
                                        <svg viewBox="0 0 52 50" fill="none">
                                            <path
                                                d="M29.8244 24.0833L24.9074 19.1663L26.2036 17.8701L33.3334 25L26.2036 32.1298L24.9074 30.8336L29.8244 25.9166H18.6667V24.0833H29.8244Z"
                                                fill="#09121F"></path>
                                            <rect x="0.5" y="0.5" width="51" height="49" rx="24.5" stroke="black"></rect>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                </div>

            </div>

            <DynamicComponent/>
        </section>
    );
};

export default News;


export const getServerSideProps = (async ({ req, res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    const resNews = await fetchNews()
    if (!resNews) {
        return {
            notFound: true
        }
    }

    let loader = false;
    if (resNews) loader = true;
    return {
        props: {resNews, loader}
    }
})