import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import RegistrationPage from "../pages/registrationPage/RegistrationPage.jsx";
import LogInPage from "../pages/loginPage/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "*",
        element: <ErrorPage/>,
    },
    {
        path: "registration",
        element: <RegistrationPage/>,
    },                     
    {
        path: "login",
        element: <LogInPage/>,
    },                     
])

export default router;