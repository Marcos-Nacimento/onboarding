import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Private = ({ children }: {children: JSX.Element}) => {
    let { data } = useAuth();

    return data ? children : <Navigate to="/" /> 
};

export default Private;