import React from "react";
import useAuth from "../hooks/useAuth";
import Balance from "../components/balance";
import Activities from "../components/activities";
import PaymentReal from "../components/paymentReal";

const Dashbord: React.FC = () => {
    let { data } = useAuth();

    return (
        <div className="p-5">
            <p className="mb-5 text-md text-gray-300 font-bold font-poppins select-none">Olá, {data.name}</p>
            <div className="grid grid-cols-2">
                <div className="space-y-8">
                    <Balance />
                    <PaymentReal />
                </div>
                <Activities />
            </div>
        </div>
    );
};

export default Dashbord;