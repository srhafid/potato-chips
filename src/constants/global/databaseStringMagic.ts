export class DatabaseStringMagicConfig {
    static readonly portDB: string = "27017";
    static readonly typeDatabase: string = "mongodb";
    static readonly urlConnect: string = "127.0.0.1";
    static readonly nameDatabase: string = "mongoose-app";
    static readonly warnMessageIsCorrect: string = "connect to mongo, is nice";
    static readonly urlCompleteConnect: string = `${this.typeDatabase}://${this.urlConnect}:${this.portDB}/${this.nameDatabase}`;

    static errorArgumentCatch(error: string): string {
        return `error in connect to mongo db => ${error}`
    }
}