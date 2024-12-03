import { Elysia } from "elysia";
import { Logestic } from 'logestic';
import { StringRoutersRegister } from "../../constants/routers/auth/stringRoutersRegister";

export const authRouterRegister = (): Elysia<any> => {
    const authRegister = new Elysia({ prefix: StringRoutersRegister.prefix });

    authRegister.use(Logestic.preset(StringRoutersRegister.logType as any));
    authRegister.get(StringRoutersRegister.routerRegister, () => "");

    return authRegister;
}