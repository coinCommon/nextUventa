import React from 'react';
import {fetchNews, fetchOneNews} from "../../../http/newsAPI";
import Loader from "../../../components/Link/loader";
import Navigation from "../../../components/Link/navigation";
import {MAIN_ROUTE, NEWS_ROUTE} from "../../../utils/const";
import Feedback from "../../../components/Link/feedback";
import Head from "next/head";

const Id = ({resNews, loader}) => {

    if (!loader) {
        return <Loader/>
    }
    return (
        <section className={'one_news'}>
            <Head>
                <title>{resNews.title}</title>
                <meta name="description" content={String(resNews.description).slice(0, 70)}/>

                <meta property="og:title" content={resNews.title}/>
                <meta property="og:description" content={String(resNews.description).slice(0, 70)}/>
            </Head>

            <div className={'container'}>
                <Navigation data={[
                    {name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1},
                    {name: 'Новости', href: NEWS_ROUTE, number: Date.now() * 1.2},
                    {name: resNews.title, href: null, number: Date.now() * 1.3}
                ]}/>
            </div>


            <div className={'container'}>
                <div className={'one_news_min_description'}>
                    {resNews.min_description}
                </div>
            </div>

                <div className={'one_news_img'}>
                    <img alt={resNews.title} src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + resNews.img}/>
                </div>

            <div className={'container'}>
                <div className={'one_news_description'}>
                    {resNews.description}
                </div>
            </div>

            <Feedback/>

        </section>
    );
};

export default Id;

export const getServerSideProps = (async ({params, req, res}) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const resNews = await fetchOneNews(params.id, params.title)
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