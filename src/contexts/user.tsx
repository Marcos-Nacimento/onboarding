import React, {
    useState,
    createContext
} from "react";
export const UserContext = createContext(null);

const UserProvider: React.FC<{children: JSX.Element}> = ({ children }) => {
 
    let [user, setUser] = useState(null);

    return (
        <UserContext.Provider
            value={null}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;