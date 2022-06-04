import React from "react";
import SideBar from "../components/sideBar";
import Header from "../components/header";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className='flex h-[100vh] bg-[#111]'>
            <SideBar />
            <div className="w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;