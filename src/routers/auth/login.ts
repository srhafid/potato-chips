import { Elysia } from "elysia";
import { Logestic } from 'logestic';
import { StringRoutersLogin } from "../../constants/routers/auth/stringRouterssLogin";

export const authRouterLogin = (): Elysia<any> => {
    const authLogin = new Elysia({ prefix: StringRoutersLogin.prefix })

    authLogin.use(Logestic.preset(StringRoutersLogin.logType as any))
    authLogin.get(StringRoutersLogin.routerLogin, () => "")

    return authLogin;
}

