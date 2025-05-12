import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "*",
        element: <ErrorPage/>,
    },                   
])

export default router;