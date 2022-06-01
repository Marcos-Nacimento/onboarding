import React, { useState } from "react";
import { RefreshIcon } from "@heroicons/react/solid";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Balance: React.FC = () => {
    let [show, setShow] = useState<boolean>(true);
    let [balance] = useState<string>("12.500,98");

    return (
        <div className="p-5 max-h-40 w-full max-w-sm select-none bg-gradient-to-r from-emerald-600 to-emerald-900 shadow-xl rounded-md">
            <div className="flex justify-between items-center my-2">
                <p className="text-white font-bold font-poppins">Saldo</p>
                <RefreshIcon className="text-slate-300 hover:text-white h-4 cursor-pointer"/>
            </div>
            <div className="flex items-center space-x-5">
                <div 
                    className="flex text-white text-lg font-bold font-poppins"
                >
                    <p className="text-white mr-2">R$</p>
                    {show ? "* * * * * * * * *" : balance}
                </div>
                {
                    show 
                    ? 
                    <EyeIcon 
                        className="text-slate-300 hover:text-white h-5 cursor-pointer"
                        onClick={() => setShow(!show)}
                    /> 
                    : 
                    <EyeOffIcon 
                        className="text-slate-300 hover:text-white h-5 cursor-pointer"
                        onClick={() => setShow(!show)}
                    />
                }
            </div>
            <p className="text-white text-sm font-normal font-poppins">
                conta: {show ? "* * * * * * * * * *" : "013-0006458-013"}
            </p>
        </div>
    );
};

export default Balance;