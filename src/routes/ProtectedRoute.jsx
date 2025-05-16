import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContextProvider";
import { Navigate, useLocation } from "react-router";
import LoaderLayout from "../layouts/loaderLayout/LoaderLayout";

const ProtectedRoute = ({ children }) => {
    const { user, authloading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(user);
    
    if (authloading) {
        // console.log("hfdkhf////////////");
        return (<LoaderLayout />)
    }

    if (user) {
        // console.log("dgdgf");
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login" replace={true} />
};

export default ProtectedRoute;