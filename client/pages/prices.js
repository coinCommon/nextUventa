import React from 'react';
import Navigation from "../components/Link/navigation";
import {MAIN_ROUTE} from "../utils/const";
import Loader from "../components/Link/loader";
import {fetchPrices} from "../http/pricesAPI";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Link/feedback'));

const Prices = ({resPrices, loader}) => {

    if (!loader) {
        return <Loader/>
    }
    return (
        <section className={'page_prices'}>

            <Head>
                <title>Цены ТК Ювента</title>
                <meta name="description" content="Перевозки рефрижераторами 5-тонниками, Перевозки 2-тонниками, Перевозки 10-тонниками"/>

                <meta property="og:title" content="Цены ТК Ювента"/>
                <meta property="og:description" content="Перевозки рефрижераторами 5-тонниками, Перевозки 2-тонниками, Перевозки 10-тонниками"/>
            </Head>

            <div className={'container'}>
                <Navigation data={[{name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1}, {name: 'Цены', href: null, number: Date.now() * 1.2}]}/>
            </div>

            <div className={'container'}>

                <div className={'prices_grid'}>
                    {resPrices.rows.length ?
                        resPrices.rows.map(p =>
                            <div key={p.id} className={'prices_child'}>
                                <div className={'prices_child_name'}>
                                    {p.title}
                                </div>
                                <div className={'prices_child_description'}>
                                    {p.description}
                                </div>
                                <div className={'prices_child_price'}>
                                    от {p.price} р
                                </div>
                            </div>
                        )
                    :
                        <h1 style={{padding: '0 0 50px 0'}}>Здесь пока пусто /'-'\</h1>
                    }

                </div>

            </div>

            <DynamicComponent/>
        </section>
    );
};

export default Prices;

export const getServerSideProps = (async ({ req, res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const resPrices = await fetchPrices()
    if (!resPrices) {
        return {
            notFound: true
        }
    }
    let loader = false;
    if (resPrices) loader = true;
    return {
        props: {resPrices, loader}
    }
})