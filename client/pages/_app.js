import React, {createContext} from 'react';
import '../css/index.scss';
import '../font/stylesheet.css';
import AllStore from "../store/AllStore";
import Header from "../components/Link/header";
import Footer from "../components/Link/footer";
import Head from "next/head";
import { Suspense } from "react";
import {YMInitializer} from 'react-yandex-metrika';
import YandexMetric from "../components/YandexMetric";
export const Context = createContext(null)

export default function MyApp({Component, pageProps}) {
    return(
        <Context.Provider
            value={{
            allStore: new AllStore(),
        }}>
            <Head>
                <meta charSet="utf-8"/>
                <meta content="text/html; charset=utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>

                <link rel="manifest" href={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/manifest.json"}/>

                <link rel="icon" type="image/png" sizes="32x32" href={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/favicon.svg"}/>
                <link rel="icon" type="image/png" sizes="16x16" href={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/favicon.svg"}/>
                <link rel="mask-icon" href={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/favicon.svg"} color="#FFF"/>
                <link rel="shortcut icon" href={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/favicon.svg"}/>
                <link rel="apple-touch-icon" href={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/apple-touch-icon-180.png"}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://uventa-transport.ru"/>
                <link rel="canonical" href="https://uventa-transport.ru/"/>
                <meta property="og:image" content={process.env.NEXT_PUBLIC_REACT_APP_API_URL+"static/logo-1920.png"}/>
                <meta name="yandex-verification" content="9f5a7f237ca3d47e"/>
                <title>Грузоперевозки по всей России от транспортной компании Ювента</title>
                <meta name="description" content="Цены ниже на 20% рынка. Пропуска по МКАД и ТТК на всех автомобилях, доставка до двери склада или магазина. Осуществляем грузовые перевозки от 50 килограммов. Имеются холодильные установки и печки."/>
                <meta property="og:title" content="Грузоперевозки по всей России от транспортной компании Ювента"/>
                <meta property="og:description" content="Цены ниже на 20% рынка. Пропуска по МКАД и ТТК на всех автомобилях, доставка до двери склада или магазина. Осуществляем грузовые перевозки от 50 килограммов. Имеются холодильные установки и печки."/>
                <meta name="keywords" content="Грузоперевозки ювента, транспортная компания ювента, грузоперевозки рефрижератором, заказать перевозку груза"/>
            </Head>
            <Suspense>
                <YandexMetric/>
            </Suspense>
            <Header/>
            <YMInitializer accounts={[987654321]} options={{defer: true}} />
            <Component {...pageProps} />
            <Footer/>
        </Context.Provider>
    )
}
