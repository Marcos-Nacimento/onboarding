import { useContext } from "react";
import { UserContext } from "../contexts/user";

const useAuth = () => {
    let { data, handlerData } = useContext(UserContext);

    return {
        data,
        handlerData
    }
};

export default useAuth;