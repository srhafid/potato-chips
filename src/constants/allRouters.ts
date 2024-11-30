import { authLogin } from "../routers/auth/login";
import { authRegister } from "../routers/auth/register";

export const allRouters = [
    authLogin,
    authRegister
]