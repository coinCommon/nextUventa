import React from 'react';
import {SuccessOpen} from "../../hocks/hideShowFeedBack";

const Success = () => {
    return (
        <div id={'modalSuccess'} className={'modals_feed_fixed'}>

            <div className={'relative'}>

                <div onClick={() => SuccessOpen(false)} className={'modals_feed_hide'}></div>

                <div id={'modalSuccessContent'} className={'content'}>
                    <h3>
                        Спасибо, ваши данные успешно отправлены!
                        Наш лучший менеджер свяжется с вами для уточнения деталей заявки.
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default Success;