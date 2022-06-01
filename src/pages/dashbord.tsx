import React from "react";
import useAuth from "../hooks/useAuth";

const Dashbord: React.FC = () => {
    let { data } = useAuth();

    return (
        <div className="p-5">
            <div className="select-none">
                <p className="text-gray-300 font-poppins">Olá, {data.name}</p>
            </div>
        </div>
    );
};

export default Dashbord;