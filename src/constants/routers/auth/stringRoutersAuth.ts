import { singleton } from "../../../utils/decorateSingleton";
import { GeneralStringMagicInRouters } from "../../global/generalStringMagic";

@singleton
export class StringRoutersAuth extends GeneralStringMagicInRouters {
    static readonly prefix: string = "/auth"
} 