import React from 'react';
import Navigation from "../components/Link/navigation";
import {MAIN_ROUTE, SERVICES_ROUTE} from "../utils/const";
import Loader from "../components/Link/loader";
import {Translate} from "../hocks/translate";
import Link from "next/link";
import {fetchServices} from "../http/servicesAPI";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Link/feedback'));

const Services = ({resServices, loader}) => {

    if (!loader) {
        return <Loader/>
    }

    return (
        <section>
            <Head>
                <title>Услуги ТК Ювента</title>
                <meta name="description" content="Перевозка грузов, городские перевозки, междугородние перевозки, перевозки рефрижераторами"/>

                <meta property="og:title" content="Услуги ТК Ювента"/>
                <meta property="og:description" content="Перевозка грузов, городские перевозки, междугородние перевозки, перевозки рефрижераторами"/>
            </Head>

            <div className={'container'}>
                <Navigation data={[{name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1}, {name: 'Услуги', href: null, number: Date.now() * 1.2}]}/>
            </div>

            <div className={'page_services'}>
                <div className={'container'}>

                    <div className={'page_services_grid'}>

                        {resServices.rows.map(s =>
                            <Link href={SERVICES_ROUTE + '/' + Translate(s.title) + '/' + s.id} key={s.id}>
                                <div className={'page_services_child'}>
                                    <div className={'page_services_title'}>
                                        {s.title}
                                    </div>
                                    <div className={'page_services_img'}>
                                        <img
                                            onDragStart={(e) => e.preventDefault()}
                                            alt={s.title}
                                            src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + s.icon}
                                        />
                                    </div>
                                </div>
                            </Link>
                        )}

                    </div>

                </div>
            </div>
            <DynamicComponent/>
        </section>
    );
};

export default Services;

export const getServerSideProps = (async ({ req, res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const resServices = await fetchServices()
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