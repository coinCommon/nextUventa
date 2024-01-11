import React from 'react';
import Router from "next/router";

const Error = () => {

    return (
        <section className={'error'}>
            <div className={'container'}>

                <div className={'flex_center'}>
                    <h2>
                        Упс... Такой страницы не существует(
                    </h2>
                </div>

                <div className={'flex_center'}>
                    <p>
                        Пожалуйста, вернитесь на главную страницу.
                    </p>
                </div>

                <div className={'flex_center'}>
                    <button
                        onClick={() => Router.push('/')}
                        className={'button_black'}
                    >
                        На главную
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Error;