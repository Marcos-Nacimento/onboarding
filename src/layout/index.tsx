import React from "react";
import SideBarSmall from "../components/sideBarSmall";
import Order from "../components/order";
import Header from "../components/header";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className='flex h-[100vh] bg-slate-900'>
            <SideBarSmall />
            <Order />
            <div className="w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;