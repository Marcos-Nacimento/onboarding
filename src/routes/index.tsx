import React from "react";
import Layout from "../layout";
import Dashbord from "../pages/dashbord";
import Account from "../pages/account";
import SignIn from "../pages/signIn";
import Redirect from "./redirect";

import { Routes, Route } from "react-router-dom";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route element={<Layout />}>
                <Route 
                    path="/dashbord" 
                    element={
                        <Redirect to="/">
                            <Dashbord />
                        </Redirect>
                    }
                />
                <Route 
                    path="/account" 
                    element={
                        <Redirect to="/">
                            <Account />
                        </Redirect>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Routers;