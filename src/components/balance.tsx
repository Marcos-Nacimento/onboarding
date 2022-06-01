import React from "react";

const Balance: React.FC = () => {
    return (
        <div className="p-5 max-h-40 w-full max-w-sm select-none bg-gradient-to-r from-emerald-600 to-emerald-900 shadow-xl rounded-md">
            <p className="mt-4 text-white font-bold font-poppins">Saldo</p>
            <h3 className="text-white text-xl font-bold font-poppins mt-2">
                R$ 70.247,05
            </h3>
            <p className="text-white font-normal font-poppins">
                conta: 013-0006458-013
            </p>
        </div>
    );
};

export default Balance;