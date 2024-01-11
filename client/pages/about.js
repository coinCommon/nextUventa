import React from 'react';
import Navigation from "../components/Link/navigation";
import {MAIN_ROUTE} from "../utils/const";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Link/feedback'));

const About = () => {

    return (
        <section>

            <Head>
                <title>О транспортной компании Ювента</title>
                <meta name="description" content="Отслеживайте, контролируйте и сохраняйте ваш груз с ТК ЮВЕНТА"/>

                <meta property="og:title" content="О транспортной компании Ювента"/>
                <meta property="og:description" content="Отслеживайте, контролируйте и сохраняйте ваш груз с ТК ЮВЕНТА"/>
            </Head>

            <div className={'container'}>
                <Navigation data={[{name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1}, {name: 'О нас', href: null, number: Date.now() * 1.2}]}/>
            </div>

            <div className={'page_about'}>
                <div className={'container'}>
                    <h3>
                        Отслеживайте, контролируйте и сохраняйте ваш груз с ТК «ЮВЕНТА»
                    </h3>

                    <div className={'page_about_grid'}>

                        <div className={'page_about_child'}>
                            <div className={'page_about_title'}>
                                1. Мобильное приложение
                            </div>

                            <div className={'page_about_description'}>
                                Отслеживание нахождения вашего груза через систему ГЛОНАСС
                            </div>
                        </div>

                        <div className={'page_about_child'}>
                            <div className={'page_about_title'}>
                                2. Температурный режим
                            </div>

                            <div className={'page_about_description'}>
                                Холодильные установки поддерживают от -20, а печки до +20
                            </div>
                        </div>

                        <div className={'page_about_child'}>
                            <div className={'page_about_title'}>
                                3. Водители-профи
                            </div>

                            <div className={'page_about_description'}>
                                Каждый проехал этим маршрутом 300+ раз, опыт вождения 10+ лет
                            </div>
                        </div>

                        <div className={'page_about_child'}>
                            <div className={'page_about_title'}>
                                4. Система крепления груза
                            </div>

                            <div className={'page_about_description'}>
                                Такелажные рейки, распорные штанги, стяжные ремни, крючки надёжно зафиксируют груз
                            </div>
                        </div>

                        <div className={'page_about_child'}>
                            <div className={'page_about_title'}>
                                5. Без привлечения грузчиков
                            </div>

                            <div className={'page_about_description'}>
                                Подъёмный механизм груза поможет с погрузкой и разгрузкой
                            </div>
                        </div>

                        <div className={'page_about_child'}>
                            <div className={'page_about_title'}>
                                6. Жёсткие борта
                            </div>

                            <div className={'page_about_description'}>
                                Сохраняют мелкие грузы, которые могут вылететь через тентованные кузова
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <DynamicComponent/>

        </section>
    );
};

export default About;