import React from 'react';
import {FeedBackOpen} from "../../hocks/hideShowFeedBack";

const Feedback = () => {

    return (
        <section className={'feedback'}>
            <div onDragStart={(e) => {
                e. preventDefault()
            }} className={'feedback_img'}>
                <img alt={'Ювента рефрижератор'} src={process.env.NEXT_PUBLIC_REACT_APP_API_URL+'auto_feedback.webp'}/>
            </div>

            <div className={'container'}>
                <div className={'feedback_flex'}>

                    <div className={'text'}>
                        <div className={'title'}>
                            Нет подходящего маршрута?
                        </div>
                        <div className={'description'}>
                            Оставьте ваши данные и мы подберем для вас оптимальный вариант
                        </div>
                    </div>

                    <div>
                        <button onClick={() => FeedBackOpen(true)} className={'button_noBack'}>Обратная связь</button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Feedback;