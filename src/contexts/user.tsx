import React, {
    useState,
    Dispatch,
    createContext
} from "react";
import UserProps from "../types/User";

type ContextProps = {
    data: UserProps,
    handlerData: Dispatch<UserProps>
};

export const UserContext = createContext({} as ContextProps);

const UserProvider: React.FC<{children: JSX.Element}> = ({ children }) => {
    let credentials: UserProps = JSON.parse(`${localStorage.getItem("@user_authenticated@")}`);

    let [user, setUser] = useState<UserProps>(credentials);

    return (
        <UserContext.Provider
            value={{
                data: user,
                handlerData: setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;