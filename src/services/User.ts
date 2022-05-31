import UserProps from "../types/User";
import api from "./api";
import axios from "axios";

class User {
    async update(data: UserProps) {
        let { id, ...rest } = data;

        if(!id) {
            return {msg: "Oops, paramater id missing!"};
        };

        try {
            let { data } = await axios.patch(`${api}/user/update`, {
                accountId: id,
                ...rest
            });

            return data;
        }catch(error) {
            return error;
        };
    };
    async auth(email: string, password: string) {
        if(!email || !password) {
            return {msg: "Oops, campos vazios!"};
        };

        try {
            let { data } = await axios
            .post(`${api}/user/auth`, {
                email,
                password
            });

            return data;
        }catch({ response }) {
            return response;
        };
    }
};

export default User;