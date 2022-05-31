import api from "./api";
import axios from "axios";

class User {
    async update(data: any) {
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
        }catch({ response }) {
            return response;
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