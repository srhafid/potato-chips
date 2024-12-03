import { singleton } from "../../../utils/decorateSingleton";
import { StringRoutersAuth } from "./stringRoutersAuth";

@singleton
export class StringRoutersLogin extends StringRoutersAuth {
    static readonly routerLogin: string = "/login";
}

