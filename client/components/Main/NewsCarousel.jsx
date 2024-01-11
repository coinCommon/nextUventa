import React, {useEffect, useState} from 'react';
import Carousel from "nuka-carousel";
import dateFormat from 'dateformat';
import Router from "next/router";
import {NEWS_ROUTE} from "../../utils/const";
import {Translate} from "../../hocks/translate";

const NewsCarousel = ({data}) => {

    // Если меньше 924
    const [clientWidth, setClientWidth] = useState({width: '510px', quantity: 2, next: '200px', prev: '270px'})
    useEffect(() => {
        if (window.innerWidth < 924) {
            setClientWidth({width: '100%', quantity: 1, next: '0', prev: '70px'})
        }
        else {
            setClientWidth({width: '510', quantity: 2, next: '200px', prev: '270px'})
        }
    }, [])


    const [drag, setDrag] = useState(true)
    const ClickNavigate = (e, title, id) => {
        if (drag) {
            Router.push(NEWS_ROUTE + '/' + Translate(title) + '/' + id)
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
    }


    return (

                <Carousel
                    defaultControlsConfig={{
                        nextButtonText:
                            <div className={'arrow_slide'}>
                                <svg viewBox="0 0 52 50" fill="none">
                                    <path
                                        d="M29.8244 24.0833L24.9074 19.1663L26.2036 17.8701L33.3334 25L26.2036 32.1298L24.9074 30.8336L29.8244 25.9166H18.6667V24.0833H29.8244Z"
                                        fill="#09121F"></path>
                                    <rect x="0.5" y="0.5" width="51" height="49" rx="24.5" stroke="black"></rect>
                                </svg>
                            </div>,
                        prevButtonText:
                            <div className={'arrow_slide'}>
                                <svg viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.1757 24.0833L27.0927 19.1663L25.7965 17.8701L18.6667 25L25.7965 32.1298L27.0927 30.8336L22.1757 25.9166H33.3334V24.0833H22.1757Z" fill="#09121F">
                                    </path>
                                    <rect x="-0.5" y="0.5" width="51" height="49" rx="24.5" transform="matrix(-1 0 0 1 51 0)" stroke="black"></rect>
                                </svg>
                            </div>,
                        pagingDotsStyle: {
                            display: "none",
                        },
                        prevButtonStyle: {
                            position: "absolute",
                            top: -90,
                            right: clientWidth.prev,
                            width: '70px',
                            height: '70px',
                            background: 'none'
                        },
                        nextButtonStyle: {
                            position: "absolute",
                            top: -90,
                            right: clientWidth.next,
                            width: '70px',
                            height: '70px',
                            background: 'none'
                        },
                    }}

                    withoutControls={false}
                    onDrag={() => setDrag(false)}
                    onDragEnd={() => setDrag(true)}

                    // onDragStart={() => console.log('start')}
                    // afterSlide={(index) => console.log('after ' + index)}
                    // beforeSlide={(index) => console.log('before ' + index)}

                    slideWidth={clientWidth.width}
                    speed={1500}
                    disableEdgeSwiping={false}
                    slidesToShow={clientWidth.quantity} cellSpacing={10} slidesToScroll={1}
                    dragThreshold={0.2}
                >

                    {data.map(m =>
                        <div key={m.id} className={'news_slide_content'}>
                            <div
                                onMouseUp={(e) => ClickNavigate(e, m.title, m.id)}
                            >
                                <p className={'news_date'}>
                                    {dateFormat(m.createdAt, "dd mmmm yyyy")}
                                </p>
                                <div className={'news_title'}>
                                    {m.title}
                                </div>
                                <div className={'news_description'}>
                                    {m.description}
                                </div>

                                <div onClick={() => {
                                    // navigate(NEWS_ROUTE + '/' + Translate(m.title) + '/' + m.id)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }} className={'news_arrow'}>
                                    <svg viewBox="0 0 52 50" fill="none">
                                        <path
                                            d="M29.8244 24.0833L24.9074 19.1663L26.2036 17.8701L33.3334 25L26.2036 32.1298L24.9074 30.8336L29.8244 25.9166H18.6667V24.0833H29.8244Z"
                                            fill="#09121F"></path>
                                        <rect x="0.5" y="0.5" width="51" height="49" rx="24.5" stroke="black"></rect>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}

                </Carousel>

    );
};

export default NewsCarousel;