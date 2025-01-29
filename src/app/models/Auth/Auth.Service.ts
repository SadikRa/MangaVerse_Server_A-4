import { TLoginUser } from "./Auth.Interface";

const loginUser = async(payload: TLoginUser) => {
    console.log(payload);
    return{}
}

export const AuthServices = {
    loginUser
}