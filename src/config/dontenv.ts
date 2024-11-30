import dotenv from 'dotenv';
import { DotenvInitStringMagicConfig } from '../constants/global/dotenvInitStringMagic';

const envStringMagic = DotenvInitStringMagicConfig

export const dotenvInit = async (
    environment: 'local' | 'prod' = envStringMagic.environment,
    customPaths: { local?: string; prod?: string } = {}
): Promise<void> => {
    const envPaths = {
        local: customPaths.local || envStringMagic.envLocal,
        prod: customPaths.prod || envStringMagic.envProd,
    };

    const envFilePath = envPaths[environment];

    try {
        const fileExists = await Bun.file(envFilePath).exists();
        if (!fileExists) {
            console.error(envStringMagic.errorDonExist(envFilePath));
            process.exit(1);
        }
        dotenv.config({ path: envFilePath });
        console.info(envStringMagic.infoConfigLoadEnvFile(envFilePath));
    } catch (error) {
        console.error(envStringMagic.errorLoadEnvFile(error as string));
        process.exit(1);
    }
};
