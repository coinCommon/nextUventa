import {useContext, useEffect, useState} from "react";
import {Context} from "./pages/_app";
import {check, checkRole} from "./http/userAPI";
import Router from "next/router";
import {AUTH_ROUTE} from "./utils/const";
import Loader from "./components/Link/loader";

const withAuth = Component => {
    const Authorization = (props) => {
        const {allStore} = useContext(Context)
        const isLoggedIn = allStore.getIsAuth;
        const isAdminIn = allStore.getIsAdmin;

        const [loading, setLoading] = useState(true)
        useEffect( () => {
            checkRole().then(data => {
                allStore.setIsAdmin(true)
            }).catch(error => console.log(error))
            check().then(data => {
                allStore.setIsAuth(true)
                allStore.setUsers({id: data.id, name: data.name, email: data.email, role: data.role})
            }).catch(error => console.log(error)).finally(() => setLoading(false))
        }, [])
        if (loading) {
            return <Loader/>
        }

        // If user is not logged in, return login component
        if (!isLoggedIn || !isAdminIn) {
            Router.push(AUTH_ROUTE)
            return null
        }

        // If user is logged in, return original component
        return (
            <Component {...props} />
        );
    };

    Authorization.getInitialProps = async (ctx) => {
        const ComponentComponentInitialProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { ...ComponentComponentInitialProps };
    };
    return Authorization;
};

export default withAuth;