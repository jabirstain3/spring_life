import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import RegistrationPage from "../pages/registrationPage/RegistrationPage.jsx";
import LogInPage from "../pages/loginPage/LoginPage.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";
import ServicesDetailsLayout from "../layouts/servicesDetailsLayout/ServicesDetailsLayout.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <HomeLayout/>,
            },
            {
                path: "services/:id",
                // element: <ProtectedRoute> <ServicesDetailsLayout/> </ProtectedRoute>,
                element: <ServicesDetailsLayout/>,
            },
        ]
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