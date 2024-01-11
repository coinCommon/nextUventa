import React, {useState} from 'react';
import Navigation from "../components/Link/navigation";
import {MAIN_ROUTE} from "../utils/const";
import Loader from "../components/Link/loader";
import {fetchTechnologies} from "../http/technologiesAPI";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Link/feedback'));

const Technologies = ({resTechnologies, loader}) => {

    const [imageCount, setImageCount] = useState(false)
    const ImageLoop = (event) => {
        if (!imageCount && typeof window !== 'undefined') {
            event.target.style = `position: fixed;
                                padding: 10px;
                                top: 0;
                                left: 0;
                                max-height: none;
                                z-index: 99999999;`
            document.body.style.overflow = 'hidden'
            setImageCount(true)
        } else {
            event.target.style = `position: relative;
                                padding: 0;
                                max-height: 350;
                                z-index: 1;`
            document.body.style.overflow = 'auto'
            setImageCount(false)
        }
    }

    if (!loader) {
        return <Loader/>
    }

    return (
        <section className={'page_technology'}>

            <Head>
                <title>Наша команда ТК Ювента</title>
                <meta name="description" content="Наша команда ТК Ювента, Грузоперевозки по всей России от транспортной компании Ювента"/>

                <meta property="og:title" content="Наша команда ТК Ювента"/>
                <meta property="og:description" content="Наша команда ТК Ювента, Грузоперевозки по всей России от транспортной компании Ювента"/>
            </Head>

            <div className={'container'}>
                <Navigation data={[{name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1}, {name: 'Наша команда', href: null, number: Date.now() * 1.2}]}/>
            </div>

            <div className={'container'}>

                {resTechnologies.rows.length ?
                    <>
                    <div className={'technology_main'}>
                        <div className={'technology_main_title'}>
                            {resTechnologies.rows[0].title}
                        </div>
                        <div className={'technology_main_description'}>
                            {resTechnologies.rows[0].description}
                        </div>
                        <div className={'technology_main_img'}>
                            <img alt={resTechnologies.rows[0].title}
                                 src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + resTechnologies.rows[0].img}/>
                        </div>
                    </div>

                    <div className={'technology_grid'}>
                        {resTechnologies.rows.map((t, index) =>
                            index === 0 ?
                                ''
                                :
                                <div
                                    key={t.id}
                                    className={'technology_child'}
                                >
                                    <div className={'technology_child_flex'}>
                                        <div className={'technology_child_block'}>
                                            <div className={'technology_child_title'}>
                                                {t.title}
                                            </div>
                                            <div className={'technology_child_description'}>
                                                {t.description}
                                            </div>
                                        </div>

                                        <div className={'technology_child_img'}>
                                            <img onClick={
                                                (e) => ImageLoop(e)}
                                                 alt={t.title} src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + t.img}
                                            />
                                        </div>
                                    </div>
                                </div>
                        )}
                    </div>
                    </>
                    :
                    <h1 style={{padding: '0 0 50px 0'}}>Здесь пока пусто /'-'\</h1>
                }

            </div>


            <DynamicComponent/>
        </section>
    );
};
export default Technologies;

export const getServerSideProps = (async ({ req, res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const resTechnologies = await fetchTechnologies()
    if (!resTechnologies) {
        return {
            notFound: true
        }
    }
    let loader = false;
    if (resTechnologies) loader = true;
    return {
        props: {resTechnologies, loader}
    }
})