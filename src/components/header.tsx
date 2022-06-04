import React from "react";
import { ChatAlt2Icon, BellIcon } from "@heroicons/react/solid";

const Header: React.FC = () => {
    return (
        <div className="flex justify-end h-10 border border-x-0 border-t-0 py-3 px-2 border-slate-800">
            <div className="flex space-x-4 mr-4">
                <ChatAlt2Icon className="text-white h-5 cursor-pointer"/>
                <BellIcon className="text-white h-5 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Header;