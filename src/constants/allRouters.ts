import Elysia from "elysia";
import { authRouterLogin } from "../routers/auth/login";
import { authRouterRegister } from "../routers/auth/register";

export const allRouters: Elysia<any>[] = [
    authRouterLogin(),
    authRouterRegister()
]