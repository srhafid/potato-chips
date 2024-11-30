import { Elysia } from "elysia";
import { Logestic } from 'logestic';
import { StringRoutersLogin } from "../../constants/routers/stringRouters";

const stringMagic = StringRoutersLogin;

export const authLogin = new Elysia({ prefix: stringMagic.prefix })

authLogin.use(Logestic.preset(stringMagic.logType as any))
authLogin.get(stringMagic.routerLogin, () => "")
