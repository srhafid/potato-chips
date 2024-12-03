import { propsDatabaseStringMagic } from "@interfaces/constants/global/interfaceDatabaseStringMagic";
import { singleton } from "@utils/decorateSingleton";

@singleton
class DatabaseStringMagicConfig {

    readonly warningMessage: string = "connect to mongo, is nice";

    readonly portDB: string;
    readonly typeDatabase: string;
    readonly urlConnect: string;
    readonly nameDatabase: string;

    constructor({ portDB, urlConnect, typeDatabase, nameDatabase }: propsDatabaseStringMagic) {
        this.portDB = portDB;
        this.urlConnect = urlConnect;
        this.typeDatabase = typeDatabase;
        this.nameDatabase = nameDatabase;
    }

    public get urlCompleteConnect(): string {
        return `${this.typeDatabase}://${this.urlConnect}:${this.portDB}/${this.nameDatabase}`;
    }

    public errorArgumentCatch(error: string): string {
        return `error in connect to mongo db => ${error}`;
    }
}

export const encapsulationDatabaseStringMagic = (): DatabaseStringMagicConfig => {
    const { PORT_DB, URL_CONNECT, TYPE_DATABASE, NAME_DATABASE } = process.env;

    if (!PORT_DB || !URL_CONNECT || !TYPE_DATABASE || !NAME_DATABASE) {
        throw new Error("Missing required environment variables");
    }

    return new DatabaseStringMagicConfig({
        portDB: PORT_DB,
        urlConnect: URL_CONNECT,
        typeDatabase: TYPE_DATABASE,
        nameDatabase: NAME_DATABASE
    });
};
