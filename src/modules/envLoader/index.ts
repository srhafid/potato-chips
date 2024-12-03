
export class EnvLoader {
    private static instance: EnvLoader | undefined = undefined;

    public static getInstance(): EnvLoader {
        if (!this.instance) {
            this.instance = new EnvLoader();
        }
        return this.instance;
    }

    public async load(filePath: string = ".env"): Promise<Record<any, string>> {
        const loadFile = await Bun.file(filePath).text();
        const textSplit: Array<string> = loadFile.split("\n");
        let loadEnvVar: Record<any, string> = {};
        for (const itemEnvText of textSplit) {
            if (itemEnvText[0] === "#" || !itemEnvText[0]) continue;
            let equalSep: Array<string> = itemEnvText.split("=");
            process.env[equalSep[0]] = equalSep[1].slice(1, -1);
        }
        return loadEnvVar;
    }
}

export const envLoader = EnvLoader.getInstance();
