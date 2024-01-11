import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import HideAndShows from "../hocks/hideAndShow";
import {Context} from "./_app";
import {ADMIN_ROUTE, AUTH_ROUTE} from "../utils/const";
import {checkRole, login} from "../http/userAPI";
import Router from 'next/router'
import { useRouter } from 'next/router';
import {observer} from "mobx-react-lite";
import Loader from "../components/Link/loader";
import Head from "next/head";

const Auth = observer(() => {
    const {allStore} = useContext(Context)

    const router = useRouter()
    const isLogin = router.pathname === AUTH_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    // LOGOUT
    const [hidePassword, setHidePassword] = useState(false)
    const Focus = (id) => {
        document.getElementById(id).style = 'top: -20px; left: 0; font-size: 12px; color: #333;'
    }
    const Blur = (id, value) => {
        let styleLabel = document.getElementById(id)
        if (value !== '') {return false}
        else {styleLabel.style = 'top: 13px; left: 12px; font-size: 16px; color: #FFF; height: 0; margin: 0 auto;'}
    }
    // LOGOUT

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            }
            allStore.setUsers({id: data.id, name: data.name, email: data.email, role: data.role})
            allStore.setIsAuth(true)
            if (data.role === 'ADMIN') {
                allStore.setIsAdmin(true)
                await Router.push(ADMIN_ROUTE)
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    const [loading, setLoading] = useState(true)
    useEffect( () => {
        checkRole().then(data => {
            if (data.role === 'ADMIN') {
                Router.push(ADMIN_ROUTE)
                return false
            }
            Router.push('/')
        }).catch(error => console.log(error)).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <Loader/>
    }

    return (
        <section className={'section_admin'}>

            <Head>
                <title>Авторизация ТК Ювента</title>
                <meta name="description" content="Авторизация ТК Ювента"/>

                <meta property="og:title" content="Авторизация ТК Ювента"/>
                <meta property="og:description" content="Авторизация ТК Ювента"/>
            </Head>

            <div className={'container'}>
            <div className={'form_entrance'}>
                <div className={'display'}>
                    <div className={'text'}>
                        UVENTA
                    </div>
                    <div className={'inputs_label'}>
                        <input
                            onFocus={() => Focus('login')}
                            onBlur={(e) => Blur('login', e.target.value)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type={'email'}
                        />
                        <label id={'login'}>Логин</label>
                    </div>
                    <div className={'inputs_label'}>
                        <input
                            onFocus={() => Focus('password')}
                            onBlur={(e) => Blur('password', e.target.value)}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={hidePassword ? 'text' : 'password'}
                        />
                        <label id={'password'}>Password</label>

                        {/*Показать \ скрыть пароль*/}
                        <div onClick={() => HideAndShows(hidePassword, setHidePassword)} className={'hide_password'}>
                            {hidePassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </div>

                    </div>
                    <div>
                        <button onClick={() => click()} className={'button_noBack'}>
                            Вход
                        </button>
                    </div>

                </div>
            </div>
            </div>

        </section>
    );
});

export default Auth;