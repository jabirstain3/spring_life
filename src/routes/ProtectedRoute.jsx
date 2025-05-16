import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContextProvider";
import { Navigate, useLocation } from "react-router";
import LoaderLayout from "../layouts/loaderLayout/LoaderLayout";

const ProtectedRoute = ({ children }) => {
    const { user, authloading } = useContext(AuthContext);
    const location = useLocation();
    console.log(user, authloading);
    
    if (authloading) {
        return <LoaderLayout />
    }

    if (user) {
        return children;
    }
    
    return <Navigate state={location} to="/login" replace={true}/>
};

export default ProtectedRoute;