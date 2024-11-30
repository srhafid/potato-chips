export class DotenvInitStringMagicConfig {
    static readonly environment = "local";
    static readonly envLocal = "./env/.env.local";
    static readonly envProd = "./env/.env.prod";

    static errorDonExist(envFilePath: string) {
        return `The environment file (${envFilePath}) does not exist.`
    }

    static infoConfigLoadEnvFile(envFilePath: string) {
        return `Configuration loaded from: ${envFilePath}`;
    }

    static errorLoadEnvFile(envFilePathError: string) {
        return `Error loading environment file: ${envFilePathError}`;
    }
}