import React from "react";
import Layout from "../layout";
import Dashbord from "../pages/dashbord";
import Account from "../pages/account";

import { Routes, Route } from "react-router-dom";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/dashbord" element={<Dashbord />}/>
                <Route path="/account" element={<Account />}/>
            </Route>
        </Routes>
    );
};

export default Routers;