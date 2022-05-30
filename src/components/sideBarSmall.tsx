import React from "react";
import navigates from "../utils/navigates";

import { useNavigate } from "react-router-dom";

const SideBarSmall: React.FC = () => {
    let navigate = useNavigate();

    return (
        <div className='border border-y-0 border-l-0 border-slate-800 w-[5rem]'>
            <ul className="flex flex-col items-center py-2 space-y-5">
                {navigates.map((item, index) => (
                    <li
                        className="delay-80 bg-slate-300 h-10 w-10 rounded-full cursor-pointer hover:rounded-md hover:bg-red-500"
                        key={index}
                        onClick={() => navigate(item.navigate)}
                    >
                    
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBarSmall;