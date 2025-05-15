import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContextProvider";
import { Navigate, useLocation } from "react-router";
import LoaderLayout from "../layouts/loaderLayout/LoaderLayout";

const ProtectedRoute = ({ children }) => {
    const { user, authloading } = useContext(AuthContext);
    const location = useLocation();

    if (authloading) {
        return (<LoaderLayout />)
    }

    if (user) {
        return children;
    }
    
    return (<Navigate state={location.pathname} to="/login" replace={true} />);
};

export default ProtectedRoute;