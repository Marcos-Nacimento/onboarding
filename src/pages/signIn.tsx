import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import UserMethods from "../services/User";
import useAuth from "../hooks/useAuth";

const SignIn: React.FC = () => {
    let user = new UserMethods();
    let navigation = useNavigate();

    let { handlerData } = useAuth();

    const scheme = Yup
    .object()
    .shape({
        email: Yup
        .string()
        .email("email invalido!")
        .required("campo vazio!"),
        password: Yup
        .string()
        .min(8, "Senha muito pequeno!")
        .max(32, "Senha muito grande!")
        .required("campo vazio!")
    });

    const formik = useFormik({
        validationSchema: scheme,
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ email, password }) => {
            let result = await user.auth(email, password);
            console.log(result);
            if(result.token) {
                let credentials = JSON.stringify(result);
                
                localStorage.setItem("@user_authenticated@", credentials);
                handlerData(result);

                return navigation("/dashbord", {replace: true});
            }else if(result.status === 400) {
                formik.errors.password = result.data;
                return;
            }else if(result.status === 500) {
                formik.errors.password = result.data;
                return;
            };
        },
    });

    return (
        <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="h-4/5 w-2/5 bg-white rounded-lg shadow-sm shadow-slate-100 p-5">
                <div className="select-none text-sm text-slate-500 font-body mt-10">
                    <p>
                        Olá!
                    </p>
                    <p>
                        Preencha seus dados abaixo para entrar:
                    </p>
                </div>
                <div className="mt-10">
                    <label
                        className={
                            formik.errors.email
                            ?
                            "mb-2 text-sm text-red-500 font-body"
                            :
                            "mb-2 text-sm text-slate-600 font-body"
                        }
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={
                            formik.errors.email 
                            ?
                            "shadow appearance-none border border-red-500 rounded w-full max-w-lg py-2 px-3 text-slate-600 -400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                            :
                            "shadow appearance-none border rounded w-full max-w-lg py-2 px-3 text-slate-600 -400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        }
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && (
                        <p className="text-xs text-red-500 font-body">{formik.errors.email}</p>
                    )}
                </div>
                <div className="mt-5 mb-10">
                    <label 
                        className={
                            formik.errors.email
                            ?
                            "mb-2 text-sm text-red-500 font-body"
                            :
                            "mb-2 text-sm text-slate-600 font-body"
                        }
                    >
                        Senha
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className={
                            formik.errors.password 
                            ?
                            "shadow appearance-none border border-red-500 rounded w-full max-w-lg py-2 px-3 text-slate-600 -400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                            :
                            "shadow appearance-none border rounded w-full max-w-lg py-2 px-3 text-slate-600 -400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                        }
                        placeholder="Senha"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password && (
                        <p className="text-xs text-red-500 font-body">{formik.errors.password}</p>
                    )}
                </div>
                <div
                    onClick={() => formik.handleSubmit()}
                    className="flex justify-center items-center h-10 w-auto max-w-[10rem] bg-green-400 cursor-pointer rounded-md"
                >
                    <p className="font-body text-white text-sm">entrar</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;