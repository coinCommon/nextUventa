import React from 'react';
import Navigation from "../components/Link/navigation";
import {MAIN_ROUTE} from "../utils/const";
import {fetchChapterDocuments} from "../http/chapterDocumentsAPI";
import {fetchDocuments} from "../http/documentsAPI";
import Loader from "../components/Link/loader";
import {downloadFile} from "../hocks/file";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Link/feedback'));

const Documents = ({resChapterDocuments, resDocuments, loader}) => {


    const DownloadFile = (e, fileName) => {
        e.stopPropagation()
        downloadFile(fileName)
    }


    if (!loader) {
        return <Loader/>
    }

    return (
        <section className={'documents'}>

            <Head>
                <title>Документы ТК Ювента</title>
                <meta name="description" content="Документы транспортной компании Ювента, договор на перевозку грузов автомобильным транспортом, договор-заявка на перевозку груза"/>

                <meta property="og:title" content="Документы ТК Ювента"/>
                <meta property="og:description" content="Документы транспортной компании Ювента, договор на перевозку грузов автомобильным транспортом, договор-заявка на перевозку груза"/>
            </Head>

            <div className={'container'}>
                <Navigation data={[{name: 'Главная', href: MAIN_ROUTE, number: Date.now() * 1.1}, {name: 'Документы', href: null, number: Date.now() * 1.2}]}/>
            </div>

            <div className={'documents_img'}>
                <img src={process.env.NEXT_PUBLIC_REACT_APP_API_URL+'documents.webp'}/>
            </div>

            <div className={'container'}>

                <div className={'documents_grid'}>

                    {resChapterDocuments.rows.map(m =>

                        <div key={m.id} className={'documents_child'}>
                            <h3>
                                {m.name}
                            </h3>

                            {resDocuments.rows.map(d => parseInt(d.chapter) === m.id ?
                                <div key={d.id} className={'documents_type'}>
                                    <div onClick={(e) => DownloadFile(e, d.file)} className={'documents_flex'}>
                                        <div className={'documents_name'}>
                                            {d.title}
                                        </div>
                                        <div className={'documents_icon_download'}>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6667 8.33301C12.4899 8.33301 12.3203 8.40325 12.1953 8.52827C12.0702 8.65329 12 8.82286 12 8.99967V11.6663C12 11.8432 11.9298 12.0127 11.8047 12.1377C11.6797 12.2628 11.5101 12.333 11.3333 12.333H2C1.82319 12.333 1.65362 12.2628 1.5286 12.1377C1.40357 12.0127 1.33333 11.8432 1.33333 11.6663V8.99967C1.33333 8.82286 1.2631 8.65329 1.13807 8.52827C1.01305 8.40325 0.843478 8.33301 0.666667 8.33301C0.489856 8.33301 0.320286 8.40325 0.195262 8.52827C0.0702379 8.65329 0 8.82286 0 8.99967V11.6663C0 12.1968 0.210714 12.7055 0.585787 13.0806C0.960859 13.4556 1.46957 13.6663 2 13.6663H11.3333C11.8638 13.6663 12.3725 13.4556 12.7475 13.0806C13.1226 12.7055 13.3333 12.1968 13.3333 11.6663V8.99967C13.3333 8.82286 13.2631 8.65329 13.1381 8.52827C13.013 8.40325 12.8435 8.33301 12.6667 8.33301ZM6.19333 9.47301C6.25674 9.5337 6.3315 9.58128 6.41333 9.61301C6.49313 9.64828 6.57942 9.6665 6.66667 9.6665C6.75391 9.6665 6.8402 9.64828 6.92 9.61301C7.00183 9.58128 7.0766 9.5337 7.14 9.47301L9.80667 6.80634C9.9322 6.68081 10.0027 6.51054 10.0027 6.33301C10.0027 6.15547 9.9322 5.98521 9.80667 5.85967C9.68113 5.73414 9.51087 5.66361 9.33333 5.66361C9.1558 5.66361 8.98554 5.73414 8.86 5.85967L7.33333 7.39301V0.999674C7.33333 0.822863 7.2631 0.653294 7.13807 0.52827C7.01305 0.403246 6.84348 0.333008 6.66667 0.333008C6.48986 0.333008 6.32029 0.403246 6.19526 0.52827C6.07024 0.653294 6 0.822863 6 0.999674V7.39301L4.47333 5.85967C4.41117 5.79752 4.33738 5.74821 4.25617 5.71457C4.17495 5.68093 4.08791 5.66361 4 5.66361C3.91209 5.66361 3.82505 5.68093 3.74383 5.71457C3.66262 5.74821 3.58883 5.79752 3.52667 5.85967C3.46451 5.92183 3.4152 5.99563 3.38156 6.07684C3.34792 6.15806 3.33061 6.2451 3.33061 6.33301C3.33061 6.42091 3.34792 6.50796 3.38156 6.58917C3.4152 6.67039 3.46451 6.74418 3.52667 6.80634L6.19333 9.47301Z" fill="#4375F7">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className={'documents_description'}>
                                        {d.description}
                                    </div>
                                </div>
                                : ''
                            )}

                        </div>

                    )}

                </div>
            </div>

            <DynamicComponent/>
        </section>
    );
};

export default Documents;

export const getServerSideProps = (async ({ req, res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const resChapterDocuments = await fetchChapterDocuments()
    const resDocuments = await fetchDocuments()
    if (!resChapterDocuments) {
        return {
            notFound: true
        }
    }
    let loader = false;
    if (resChapterDocuments && resDocuments) loader = true;
    return {
        props: {resChapterDocuments, resDocuments, loader}
    }
})