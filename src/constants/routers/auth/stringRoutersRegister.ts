import { singleton } from "../../../utils/decorateSingleton";
import { StringRoutersAuth } from "./stringRoutersAuth";

@singleton
export class StringRoutersRegister extends StringRoutersAuth {
    static readonly routerRegister: string = "/register";
}