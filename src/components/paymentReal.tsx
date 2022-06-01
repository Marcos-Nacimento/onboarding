import React from "react";
import { ArrowNarrowRightIcon} from "@heroicons/react/solid";

const PaymentReal: React.FC = () => {
    return (
        <div className="h-[20rem] w-full max-w-sm bg-gradient-to-r from-emerald-600 to-emerald-900 rounded-md shadow-xl">
            <div className="flex justify-between items-center pt-3 px-4">
                <p className="select-none text-white text-sm font-bold font-poppins">
                    Pagamentos
                </p>
                <div className="flex items-center space-x-1">
                    <p className="select-none text-slate-300 cursor-pointer hover:text-white text-xs font-medium font-poppins">
                        ver todos
                    </p>
                    <ArrowNarrowRightIcon className="h-3 text-white"/>
                </div>
            </div>
        </div>
    );
};

export default PaymentReal;