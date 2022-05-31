import React from "react";
import {
    UserAddIcon,
    BellIcon,
    CubeIcon,
    UserCircleIcon
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    let navigate = useNavigate();

    return (
        <div className="flex justify-end h-10 border border-x-0 border-t-0 py-3 px-2 border-slate-800">
            <div className="flex space-x-4 mr-4">
                <CubeIcon className="text-gray-300 h-5 cursor-pointer hover:text-green-400"/>
                <UserAddIcon className="text-gray-300 h-5 cursor-pointer hover:text-green-400"/>
                <BellIcon className="text-gray-300 h-5 cursor-pointer hover:text-green-400"/>
                <UserCircleIcon
                    onClick={() => navigate("/account")}
                    className="text-gray-300 h-5 cursor-pointer hover:text-green-400"
                />
            </div>
        </div>
    );
};

export default Header;