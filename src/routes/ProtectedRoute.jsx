import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContextProvider";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }
    
    return (<Navigate state={location.pathname} to="/login" replace={true} />);
};

export default ProtectedRoute;