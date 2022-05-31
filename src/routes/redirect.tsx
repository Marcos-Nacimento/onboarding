import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Redirect = ({ children, to }: {children: JSX.Element, to: string}) => {
    let { data } = useAuth();

    return data ? children : <Navigate to={to} /> 
};

export default Redirect;