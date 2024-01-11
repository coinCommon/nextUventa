import React, {useContext, useEffect, useState} from 'react';
import {
    ABOUT_ROUTE, CALCULATION_ROUTE, CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    NEWS_ROUTE, PRICES_ROUTE, PRIVACY_ROUTE,
    REVIEWS_ROUTE,
    SERVICES_ROUTE,
    TECHNOLOGIES_ROUTE
} from "../../utils/const";
import {Context} from "../../pages/_app";
import {fetchServices} from "../../http/servicesAPI";
import Loader from "./loader";
import {FeedBackOpen} from "../../hocks/hideShowFeedBack";
import Link from "next/link";
import {Translate} from "../../hocks/translate";
import dynamic from 'next/dynamic';

const DCModalsFeed = dynamic(() => import('../modals/modalsFeed'));
const DCSuccess = dynamic(() => import('../modals/success'));
const DCError = dynamic(() => import('../modals/error'));

const Footer = () => {
    const {allStore} = useContext(Context)

    const [loader, setLoader] = useState(false)
    const [footerServices, setFooterServices] = useState([])
    useEffect(() => {
        fetchServices(null, 6).then(data => setFooterServices(data.rows))
            .finally(() => setLoader(true))
    }, [])


    if (!loader) {
        return <Loader/>
    }

    return (
        <footer>
            <div className={'container'}>
                <div className={'footer_grid'}>

                    <nav>
                        <ul>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={SERVICES_ROUTE}>
                                    Все услуги
                                </Link>
                            </li>

                            {footerServices.map(s =>
                                <li key={s.id}>
                                    <Link
                                        onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                        href={SERVICES_ROUTE + '/' + Translate(s.title) + '/' + s.id}>
                                        {s.title}
                                    </Link>
                                </li>
                            )}

                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={ABOUT_ROUTE}>
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={TECHNOLOGIES_ROUTE}>
                                    Наша команда
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={CONTACTS_ROUTE}>
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={REVIEWS_ROUTE}>
                                    Отзывы
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={CALCULATION_ROUTE}>
                                    Рассчет стоимости
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={PRICES_ROUTE}>
                                    Цены
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={DOCUMENTS_ROUTE}>
                                    Документы
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                    href={NEWS_ROUTE}>
                                    Новости
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <div className={'footer_contact'}>
                        <div className={'footer_phone'}>
                            <a href={'tel:+78342310831'}>+7 (8342) 31-08-31</a>
                        </div>
                        <div className={'footer_phone'}>
                            <a href={'tel:+79603368800'}>+7 (960) 336-88-00</a>
                        </div>
                        <div className={'footer_phone'}>
                            <a style={{fontWeight: 500}} href='mailto:transport.logist777@yandex.ru'>
                                transport.logist777@yandex.ru
                            </a>
                        </div>
                        <div>
                            <button onClick={() => FeedBackOpen(true)} className={'button_noBack'}>
                                Оставить заявку
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={'footer_line'}>
                <div className={'container'}>
                    <div className={'privacy_policy'}>
                        <Link
                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                            href={PRIVACY_ROUTE}>
                            Политика конфиденциальности
                        </Link>
                        <div>
                            ©Все права защищены, 2023
                        </div>
                    </div>
                </div>
            </div>


            <DCModalsFeed />
            <DCSuccess />
            <DCError />

        </footer>
    );
};

export default Footer;