import { GeneralStringMagicInRouters } from "../global/generalStringMagic";

export class StringRoutersLogin extends GeneralStringMagicInRouters {
    static readonly prefix: string = "/auth";
    static readonly routerLogin: string = "/login";
}

export class StringRoutersRegister extends GeneralStringMagicInRouters {
    static readonly prefix: string = "/auth";
    static readonly routerRegister: string = "/register";
}