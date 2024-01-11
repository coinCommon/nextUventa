import
{
    ADMIN_ROUTE,
    MAIN_ROUTE,
    ABOUT_ROUTE,
    DOCUMENTS_ROUTE,
    TECHNOLOGIES_ROUTE,
    REVIEWS_ROUTE,
    NEWS_ROUTE,
    SERVICES_ROUTE,
    CONTACTS_ROUTE,
    PRIVACY_ROUTE,
    PRICES_ROUTE,
    CALCULATION_ROUTE,
    AUTH_ROUTE,
    ERROR_ROUTE,
} from "./utils/const";

import Main from "./pages/index";
import Admin from "./pages/admin";
import About from "./pages/about";
import Documents from "./pages/documents";
import Technologies from "./pages/technologies";
import Reviews from "./pages/reviews";
import News from "./pages/news";
import Services from "./pages/services";
import Contacts from "./pages/contacts";
import PrivacyPolicy from "./pages/privacy-policy";
import Prices from "./pages/prices";
import CostCalculation from "./pages/cost-calculation";
import OneNews from "./pages/news/[title]/[id]";
import OneServices from "./pages/services/[title]/[id]";
import Auth from "./pages/auth";



export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]


export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: Documents
    },
    {
        path: TECHNOLOGIES_ROUTE,
        Component: Technologies
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: NEWS_ROUTE + '/:title/:id',
        Component: OneNews
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: SERVICES_ROUTE + '/:title/:id',
        Component: OneServices
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },

    {
        path: PRIVACY_ROUTE,
        Component: PrivacyPolicy
    },
    {
        path: PRICES_ROUTE,
        Component: Prices
    },
    {
        path: CALCULATION_ROUTE,
        Component: CostCalculation
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    }
]
