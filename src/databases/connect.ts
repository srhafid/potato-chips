import { connect } from 'mongoose';
import { DatabaseStringMagicConfig } from '../constants/global/databaseStringMagic';

const databaseStringMagic = DatabaseStringMagicConfig

export const connectDB = (): void => {
    connect(databaseStringMagic.urlCompleteConnect)
        .then(() => {
            console.warn(databaseStringMagic.warnMessageIsCorrect);
        })
        .catch((error: unknown) => {
            console.error(databaseStringMagic.errorArgumentCatch(error as string));
        });
};