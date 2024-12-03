export class ServerStringMagicConfig {
    private static instance: ServerStringMagicConfig | undefined = undefined;

    static readonly port: number = 3000;

    public static getInstance(): ServerStringMagicConfig {
        if (!this.instance) {
            this.instance = new ServerStringMagicConfig();
        }
        return this.instance;
    }
}
