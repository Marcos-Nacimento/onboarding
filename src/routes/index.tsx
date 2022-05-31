import React from "react";
import Layout from "../layout";
import Dashbord from "../pages/dashbord";
import Account from "../pages/account";
import SignIn from "../pages/signIn";
import PrivateRoute from "./private";

import { Routes, Route } from "react-router-dom";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route element={<Layout />}>
                <Route 
                    path="/dashbord" 
                    element={
                        <PrivateRoute>
                            <Dashbord />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/account" 
                    element={
                        <PrivateRoute>
                            <Account />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Routers;