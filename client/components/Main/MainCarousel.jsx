import React from 'react';
import Carousel from "nuka-carousel";

const MainCarousel = ({data, setMainSlideTitle}) => {

    return (

                <Carousel
                    defaultControlsConfig={{
                        nextButtonText:
                            <div className={'arrow_slide'}>
                                <svg viewBox="0 0 52 50" fill="none">
                                    <path
                                        d="M29.8244 24.0833L24.9074 19.1663L26.2036 17.8701L33.3334 25L26.2036 32.1298L24.9074 30.8336L29.8244 25.9166H18.6667V24.0833H29.8244Z"
                                        fill="#FFF"></path>
                                    <rect x="0.5" y="0.5" width="51" height="49" rx="24.5" stroke="#FFF"></rect>
                                </svg>
                            </div>,
                        prevButtonText:
                            <div className={'arrow_slide'}>
                                <svg viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.1757 24.0833L27.0927 19.1663L25.7965 17.8701L18.6667 25L25.7965 32.1298L27.0927 30.8336L22.1757 25.9166H33.3334V24.0833H22.1757Z" fill="#FFF">
                                    </path>
                                    <rect x="-0.5" y="0.5" width="51" height="49" rx="24.5" transform="matrix(-1 0 0 1 51 0)" stroke="#FFF"></rect>
                                </svg>
                            </div>,
                        pagingDotsStyle: {
                            display: "none",
                        },
                        prevButtonStyle: {
                            position: "absolute",
                            bottom: 0,
                            right: 80,
                            width: '70px',
                            height: '70px',
                            background: 'none'
                        },
                        nextButtonStyle: {
                            position: "absolute",
                            bottom: 0,
                            right: 10,
                            width: '70px',
                            height: '70px',
                            background: 'none'
                        },
                    }}

                    withoutControls={false}
                    // wrapAround={true}
                    // swiping={true}
                    // dragging={false}
                    // disableEdgeSwiping={true}
                    speed={1000}
                    slidesToShow={1} slidesToScroll={1} cellSpacing={0}
                    dragThreshold={0.2}
                    afterSlide={(index) => setMainSlideTitle(index)}
                >
                    {data.map(m =>
                        <div key={m.id} className={'img'}>
                            <img src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + m.img}/>
                        </div>
                    )}


                </Carousel>

    );
};

export default MainCarousel;