import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContextProvider";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }
    
    return (<Navigate to="/login" replace={true} />);
};

export default ProtectedRoute;