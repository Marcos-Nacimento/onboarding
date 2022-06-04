import React from "react";
import Balance from "../components/balance";
import Inbox from "../components/inbox";
import Activities from "../components/activities";

const Dashbord: React.FC = () => {
     return (
        <div className="grid grid-cols-2 p-10">
            <div className="space-y-5">
                <Balance />
                <Inbox />
            </div>
            <Activities />
        </div>
    );
};

export default Dashbord;