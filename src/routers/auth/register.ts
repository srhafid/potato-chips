import { Elysia } from "elysia";
import { Logestic } from 'logestic';
import { StringRoutersRegister } from "../../constants/routers/stringRouters";

const stringMagic = StringRoutersRegister;

export const authRegister = new Elysia({ prefix: stringMagic.prefix })

authRegister.use(Logestic.preset(stringMagic.logType as any))
authRegister.get(stringMagic.routerRegister, () => "")