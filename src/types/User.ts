type UserProps = {
    id: string,
    name: string,
    email: string,
    phone?: string,
    avatar?: string,
    role: string,
    token: string,
    createdAt?: string,
    updatedAt?: string, 
};

export default UserProps;