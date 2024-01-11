import React from 'react';
import Loader from "../../../components/Link/loader";
import Navigation from "../../../components/Link/navigation";
import {MAIN_ROUTE, SERVICES_ROUTE} from "../../../utils/const";
import {fetchOneServices, fetchServices} from "../../../http/servicesAPI";
import Feedback from "../../../components/Link/feedback";
import Head from "next/head";

const Id = ({resServices, loader}) => {

    if (!loader) {
        return <Loader/>
    }

    return (
        <section className={'one_news'}>

            <Head>
                <title>{resServices.title}</title>
                <meta name="description" content={resServices.description}/>

                <meta property="og:title" content={resServices.title}/>
                <meta property="og:description" content={String(resServices.description).slice(0, 70)}/>
            </Head>

            <div className={'container'}>
                <Navigation data={[
                    {name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1},
                    {name: 'Услуги', href: SERVICES_ROUTE, number: Date.now() * 1.2},
                    {name: resServices.title, href: null, number: Date.now() * 1.3}
                ]}/>
            </div>



            <div className={'one_news_img'}>
                <img alt={resServices.title} src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + resServices.img}/>
            </div>

            <div className={'container'}>
                <div className={'one_news_description'}>
                    {resServices.description}
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
    const resServices = await fetchOneServices(params.id, params.title)
    if (!resServices) {
        return {
            notFound: true
        }
    }
    let loader = false;
    if (resServices) loader = true;
    return {
        props: {resServices, loader}
    }
})
