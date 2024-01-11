import React, {useEffect, useMemo, useState} from 'react';
import {
    ABOUT_ROUTE, CALCULATION_ROUTE, CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    NEWS_ROUTE, PRICES_ROUTE,
    REVIEWS_ROUTE,
    SERVICES_ROUTE,
    TECHNOLOGIES_ROUTE
} from "../../utils/const";

import HideAndShows from "../../hocks/hideAndShow";
import {fetchServices} from "../../http/servicesAPI";
import Loader from "./loader";
import {Translate} from "../../hocks/translate";
import {fetchWeather} from "../../hocks/file";
import Snowfall from "react-snowfall";
import Link from "next/link";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)
    useMemo(() => {
        if (typeof window === 'undefined') return false;
        if(menuActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [menuActive])


    const [loader, setLoader] = useState(false)
    const [headerServices, setHeaderServices] = useState([])
    useEffect(() => {
        fetchServices(null, 6).then(data => setHeaderServices(data.rows)).finally(() => setLoader(true))
    }, [])




    const [load, setLoad] = useState(true)
    const [weather, setWeather] = useState([null])

    const success = ({ coords }) => {
        fetchWeather(coords.latitude, coords.longitude).then(response => {
                setWeather([response])
                setLoad(true)
            }).catch(error => console.log(error))
    }
    const error = ({ message }) => {
        fetchWeather(55.755864, 37.617698).then(response => {
            setWeather([response])
            setLoad(true)
        }).catch(error => console.log(error))
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true
        })
    }, [])

    if (!loader || !load) {
        return <Loader/>
    }

    return (
        <header>
            {weather[0] && Math.round(weather[0].main.temp) < 0
                ?
                <Snowfall style={{
                    zIndex: 99999,
                    position: 'fixed'
                }}
                />
                :
                ''
            }

            <div className={'header_top'}>
                <div className={'container_1750'}>
                    <div className={'text'}>
                        <marquee loop={'-1'} direction={'left'}>
                            <span> Погода: </span>
                            {weather[0] && weather[0] !== 'error' ?
                                weather.map(w =>
                                    <div key={w.main.temp}
                                        style={{display: 'inline-block'}}
                                    >
                                        {w.name} {Math.round(w.main.temp)}°
                                        <img style={{width: '20px', margin: '0 5px'}} alt={w.weather[0].description} src={`https://openweathermap.org/img/w/${w.weather[0].icon}.png`}/>
                                         ощущается как {Math.round(w.main.feels_like)}°
                                    </div>
                                )
                                :
                                'Загрузка ...'
                            }
                        </marquee>
                    </div>
                </div>
            </div>

            <div className={'header_main'}>
                <div className={'container_1750'}>
                    <div className={'flex_space'}>

                        <Link
                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                            href={'/'}>
                            <div className={'logo'}>
                                <img alt={'Logo'} src={'../../static/logo.png'}/>
                                <div className={'logo_text'}>
                                    <span>Транспортная компания</span>
                                    Республики Мордовия
                                </div>
                            </div>
                        </Link>

                        <nav className={'menu'}>
                            <ul>
                                <li>
                                    <a>О компании</a>
                                    <div className={'arrow_4'}>
                                        <span className={'arrow_4_left'}></span>
                                        <span className={'arrow_4_right'}></span>
                                    </div>
                                </li>
                                <div className={'menu_hover'}>
                                    <div className={'subtitles'}>
                                        <Link
                                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                            href={ABOUT_ROUTE}>
                                            О нас
                                        </Link>

                                        <Link
                                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                            href={DOCUMENTS_ROUTE}>
                                            Документы
                                        </Link>

                                        <Link
                                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                            href={REVIEWS_ROUTE}>
                                            Отзывы
                                        </Link>

                                        <Link
                                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                            href={TECHNOLOGIES_ROUTE}>
                                            Наша команда
                                        </Link>
                                    </div>
                                </div>
                            </ul>

                            <ul>
                                <li>
                                    <Link
                                        onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                        href={SERVICES_ROUTE}>
                                        Услуги
                                    </Link>

                                    <div className={'arrow_4'}>
                                        <span className={'arrow_4_left'}></span>
                                        <span className={'arrow_4_right'}></span>
                                    </div>
                                </li>
                                <div className={'menu_hover'}>
                                    <div className={'subtitles'}>
                                        {headerServices.map(s =>
                                            <Link
                                                onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                                href={SERVICES_ROUTE + '/' + Translate(s.title) + '/' + s.id} key={s.id}>
                                                {s.title}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </ul>

                            <ul>
                                <li>
                                    <a>Расчет стоимости</a>
                                    <div className={'arrow_4'}>
                                        <span className={'arrow_4_left'}></span>
                                        <span className={'arrow_4_right'}></span>
                                    </div>
                                </li>
                                <div className={'menu_hover'}>
                                    <div className={'subtitles'}>
                                        <Link
                                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                            href={PRICES_ROUTE}>
                                            Цены
                                        </Link>

                                        <Link
                                            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                            href={CALCULATION_ROUTE}>
                                            Расчет стоимости
                                        </Link>

                                    </div>
                                </div>
                            </ul>

                            <ul>
                                <li>
                                    <Link
                                        onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                        href={NEWS_ROUTE}>
                                        Новости
                                    </Link>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <Link
                                        onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                                        href={CONTACTS_ROUTE}>
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={'phone'}>
                            <div className={'phone_big'}>
                                <a href={'tel:+78342310831'}>+7 (8342) 31-08-31</a>
                            </div>
                            <div className={'phone_little'}>
                                <a href={'tel:+79603368800'}>+7 (960) 336-88-00</a>
                            </div>

                            <div onClick={() => window.location.href = 'tel:+79603368800'} className={'icon_mobile'}>
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.61348 3.65951C9.29612 3.60089 9.00465 3.80342 8.94423 4.1132C8.88381 4.42299 9.08698 4.72545 9.39571 4.78607C10.3252 4.96728 11.0429 5.68679 11.2248 6.61948V6.62015C11.2766 6.88863 11.513 7.08383 11.7852 7.08383C11.8217 7.08383 11.8582 7.0805 11.8954 7.07384C12.2042 7.01188 12.4073 6.71009 12.3469 6.39963C12.0753 5.00659 11.0031 3.93066 9.61348 3.65951Z"
                                        fill="#414141"></path>
                                    <path
                                        d="M9.57317 1.33829C9.42445 1.31698 9.27506 1.36095 9.15622 1.45555C9.03406 1.55148 8.9577 1.69005 8.94111 1.84528C8.90592 2.15906 9.13232 2.44287 9.4457 2.47818C11.6068 2.71935 13.2866 4.40286 13.5296 6.5707C13.5621 6.86117 13.8058 7.08035 14.0966 7.08035C14.1185 7.08035 14.1397 7.07902 14.1616 7.07635C14.3137 7.0597 14.4491 6.98442 14.5447 6.8645C14.6397 6.74458 14.6828 6.59535 14.6655 6.44279C14.3628 3.73798 12.2694 1.63875 9.57317 1.33829Z"
                                        fill="#414141"></path>
                                    <path d="M7.35319 8.64826C10.0126 11.3069 10.6159 8.23115 12.3091 9.92321C13.9415 11.5552 14.8798 11.8821 12.8115 13.9498C12.5525 14.158 10.9064 16.6628 5.12177 10.8798C-0.663621 5.096 1.83975 3.4483 2.04801 3.1893C4.12128 1.1159 4.44261 2.05959 6.07502 3.69155C7.76827 5.38433 4.6938 5.98961 7.35319 8.64826Z"
                                          fill="#414141"></path>
                                </svg>
                            </div>

                            <div onClick={() => HideAndShows(menuActive, setMenuActive)} className={'burger'}>
                                <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 200 128.5">
                                    <line style={menuActive ? {transform: 'translateX(90px) translateY(-90px) rotate(45deg)'} : {}} className={'cls_1'} y1="123.5" x2="200" y2="123.5"/>
                                    <line style={menuActive ? {display: 'none'} : {}} className={'cls_2'} y1="64.25" x2="200" y2="64.25"/>
                                    <line style={menuActive ? {transform: 'translateX(0) translateY(130px) rotate(-45deg)'} : {}} className={'cls_3'} y1="5" x2="200" y2="5"/>
                                </svg>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


            <div className={'menu_mobile_relative'}>
                <div style={menuActive ? {transform: 'translateX(0)', opacity: 1, visibility: 'visible'} : {}} className={'menu_mobile'}>
                    <nav>
                        <ul>
                            <Link href={CALCULATION_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Рассчет стоимости
                                </li>
                            </Link>
                            <Link href={PRICES_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Цены
                                </li>
                            </Link>
                            <Link href={SERVICES_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Услуги
                                </li>
                            </Link>
                            <Link href={TECHNOLOGIES_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Наша команда
                                </li>
                            </Link>
                            <Link href={NEWS_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Новости
                                </li>
                            </Link>
                            <Link href={ABOUT_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    О нас
                                </li>
                            </Link>
                            <Link href={DOCUMENTS_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Документы
                                </li>
                            </Link>
                            <Link href={CONTACTS_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Контакты
                                </li>
                            </Link>
                            <Link href={REVIEWS_ROUTE}>
                                <li onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                    HideAndShows(menuActive, setMenuActive)
                                }}>
                                    Отзывы
                                </li>
                            </Link>

                        </ul>
                    </nav>
                </div>

                <div onClick={() => HideAndShows(menuActive, setMenuActive)} style={menuActive ? {transform: 'translateX(0)', opacity: 1, visibility: 'visible'} : {}} className={'menu_background_close'}>

                </div>
            </div>




        </header>
    );
};

export default Header;
