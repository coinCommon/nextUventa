import React from 'react';
import {ErrorOpen} from "../../hocks/hideShowFeedBack";

const Error = () => {
    return (
        <div id={'modalError'} className={'modals_feed_fixed'}>

            <div className={'relative'}>

                <div onClick={() => ErrorOpen(false)} className={'modals_feed_hide'}></div>

                <div id={'modalErrorContent'} className={'content'}>
                    <h3>
                        Произошла ошибка! <br/> Попробуйте позже!
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default Error;