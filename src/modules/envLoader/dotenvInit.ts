import { envLoader } from "./index";
import { DotenvInitStringMagicConfig } from "./constants/dotenvInitStringMagic";

const envStringMagic = DotenvInitStringMagicConfig;

export const dotenvInit = async (
    environment: 'local' | 'prod' = envStringMagic.environment,
    customPaths: { local?: string; prod?: string } = {}
): Promise<Record<any, any> | undefined> => {
    const envPaths = {
        local: customPaths.local || envStringMagic.envLocal,
        prod: customPaths.prod || envStringMagic.envProd,
    };

    const envFilePath = envPaths[environment];

    try {
        const fileExists = Bun.file(envFilePath).exists();
        if (!fileExists) {
            console.error(envStringMagic.errorDonExist(envFilePath));
            process.exit(1);
        }

        const constantEnv = await envLoader.load(envFilePath);
        console.info(envStringMagic.infoConfigLoadEnvFile(envFilePath));

        return constantEnv;
    } catch (error) {
        console.error(envStringMagic.errorLoadEnvFile(error as string));
        process.exit(1);
    }
};
