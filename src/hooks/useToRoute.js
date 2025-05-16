import { useNavigate } from "react-router";

export const useToRoute = () => {
    const navigate = useNavigate();

    const goToRoute = (path, stateObj) => {
        navigate(`${path}`, { state: stateObj });
    };

    return goToRoute;
};