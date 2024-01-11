import React from 'react';
import Carousel from "nuka-carousel";

const AboutCarousel = () => {
    return (

        <div
            onDragStart={(e) => e.preventDefault()}
            // onMouseDown={(e) => mouseDown(e)}
            // onMouseUp={(e) => mouseUp(e)}
            // onMouseMove={(e) => mouseMove(e)}
            //
            // onMouseOut={(e) => mouseUp(e)}
            className={'main_slides'}
        >
            <div
                onDragStart={(e) => e.preventDefault()}
                className={'main_slides_flex'}
            >


                <Carousel
                    defaultControlsConfig={{
                        // nextButtonText: <i className="fa fa-chevron-right" aria-hidden="true"></i>,
                        // prevButtonText: <i className="fa fa-chevron-left" aria-hidden="true"></i>,
                        pagingDotsStyle: {
                            display: "none",
                        },
                        prevButtonStyle: {
                            display: 'none',
                        },
                        nextButtonStyle: {
                            display: 'none'
                        },
                    }}
                    // swiping={true}
                    // pauseOnHover={true}
                    // withoutControls={false}
                    // speed={1500}
                    // autoplayInterval={4000}
                    // wrapAround={false}
                    // autoplay={true}
                    // speed={1500}
                    // autoplayInterval={1000}
                    // wrapAround={true}
                    transitionMode={'fade'}

                    wrapAround={true}
                    slideWidth={430}
                    speed={1000}
                    swiping={true}
                    dragging={true}
                    dragThreshold={0.2}
                >


                    <img src={process.env.NEXT_PUBLIC_REACT_APP_API_URL+'img1.webp'}/>
                    <img src={process.env.NEXT_PUBLIC_REACT_APP_API_URL+'img2.webp'}/>
                    <img src={process.env.NEXT_PUBLIC_REACT_APP_API_URL+'img3.webp'}/>

                </Carousel>


            </div>
        </div>
    );
};

export default AboutCarousel;