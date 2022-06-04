import React from "react";
import { RefreshIcon } from "@heroicons/react/solid";

const Balance: React.FC = () => {
    return (
        <div className="p-8 select-none h-48 w-full max-w-md bg-slate-900 rounded-md shadow-md">
            <div className="flex justify-between items-center">
                <p className="text-gray-300 text-sm font-poppins">saldo</p>
                <RefreshIcon className="text-gray-300 h-5 cursor-pointer hover:text-white"/>
            </div>
            <div className="mt-5">
                <p className="text-gray-300 text-md font-bold font-poppins">R$ 14.356.78</p>
                <p className="text-gray-300 text-md font-light font-poppins">conta: 000 013 058 007</p>
            </div>
        </div>
    );
};

export default Balance;