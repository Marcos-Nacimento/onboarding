import React, { useState } from "react";

const Account: React.FC = () => {
    let [name, setName] = useState<string>('Marcos');

    return (
        <div className="flex flex-col space-y-10 p-8 select-none">
            <div className="h-40 w-auto max-w-[50rem] bg-slate-800 rounded-md">
                <div className="border border-x-0 border-t-0 border-gray-700">
                    <p className="text-white text-sm p-2 ml-2 opacity-80">Informação da conta</p>
                </div>
                <div className="flex justify-between items-center px-4 py-2 font-body">
                    <p className="text-white text-sm">UserName</p>
                    <input
                        type="text"
                        readOnly
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        value="Markinhos"
                    />
                </div>
                <div className="flex justify-between px-4 py-2">
                    <p className="text-white text-sm">Email</p>
                    <input
                        type="text"
                        readOnly
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        value="marcosftp1@gmail.com"
                    />
                </div>
            </div>
            <div className="h-72 w-auto max-w-[50rem] bg-slate-800 rounded-md font-body">
                <div className="border border-x-0 border-t-0 border-gray-700">
                    <p className="text-white text-sm p-2 ml-2 opacity-80">Perfil</p>
                </div>
                <div className="flex justify-between px-4 py-2">
                    <p className="text-white text-sm">Nome</p>
                    <input
                        type="text"
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(text) => setName(text.target.value)}
                        maxLength={100}
                        value={name}
                    />
                </div>
                <div className="flex justify-between px-4 py-2">
                    <p className="text-white text-sm">Telefone</p>
                    <input
                        type="text"
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        value="(44)-998419-7458"
                    />
                </div>
                <div className="flex justify-between px-4 py-2">
                    <p className="text-white text-sm">Tipo da conta</p>
                    <input
                        type="text"
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        value="Administrativa"
                        readOnly
                    />
                </div>
                <div className="flex justify-between px-4 py-2 mb-5">
                    <p className="text-white text-sm">Status</p>
                    <p className="text-lime-600 text-sm">Ativa</p>
                </div>
                <span className="ml-4 bg-green-400 cursor-pointer text-white text-sm rounded-sm p-1">
                    atualizar
                </span>
            </div>
        </div>
    );
};

export default Account;