import { connect } from 'mongoose';
import { encapsulationDatabaseStringMagic } from '../constants/global/databaseStringMagic';


export const connectDB = (): void => {
    const databaseStringMagic = encapsulationDatabaseStringMagic();
    connect(databaseStringMagic.urlCompleteConnect)
        .then(() => {
            console.warn(databaseStringMagic.warningMessage);
        })
        .catch((error: unknown) => {
            console.error(databaseStringMagic.errorArgumentCatch(error as string));
        });
};