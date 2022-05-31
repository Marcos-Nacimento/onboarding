import React, {
    useState,
} from "react";
import useAuth from "../hooks/useAuth";
import UserMethods from "../services/User"; 

const Account: React.FC = () => {
    let { data, handlerData } = useAuth();
    let [name, setName] = useState<string>(data.name);
    let [phone, setPhone] = useState<string>(!data.phone ? "" : data.phone);

    let user = new UserMethods();

    const update = async () => {
        let result = await user.update({
            name,
            phone,
            id: data.id
        });

        let credentials = JSON.stringify({
            token: data.token,
            ...result
        });

        localStorage.setItem("@user_authenticated@", credentials);

        handlerData({
            token: data.token,
            ...result
        });
    };

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
                        value={data.name}
                    />
                </div>
                <div className="flex justify-between px-4 py-2">
                    <p className="text-white text-sm">Email</p>
                    <input
                        type="text"
                        readOnly
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        value={data.email}
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
                        onChange={text => setPhone(text.target.value)}
                        placeholder="telefone"
                        value={phone}
                    />
                </div>
                <div className="flex justify-between px-4 py-2">
                    <p className="text-white text-sm">Tipo da conta</p>
                    <input
                        type="text"
                        className="shadow appearance-none bg-gray-700 border-gray-700 border rounded w-full max-w-lg py-2 px-3 text-slate-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        readOnly
                        value={
                            data.role === "all"
                            ?
                            "administrativa"
                            :
                            "colaborador"
                        }
                    />
                </div>
                <div className="flex justify-between px-4 py-2 mb-3">
                    <p className="text-white text-sm">Status</p>
                    <p className="text-lime-600 text-sm">
                        {data.status ? "Ativa" : "Desativada"}
                    </p>
                </div>
                <button 
                    disabled={
                        data.name
                        !== name
                        ||
                        data.phone
                        !== phone
                        ?
                        false
                        :
                        true
                    }
                    onClick={() => update()}
                    className={
                        data.name
                        !== name
                        ||
                        data.phone
                        !== phone
                        ?
                        "ml-4 bg-green-400 cursor-pointer text-white text-sm rounded-sm px-10 py-2"
                        :
                        "ml-4 bg-gray-500 cursor-not-allowed text-white text-sm rounded-sm px-10 py-2"
                    }
                >
                    atualizar
                </button>
            </div>
        </div>
    );
};

export default Account;