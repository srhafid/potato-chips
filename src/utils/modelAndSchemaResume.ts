import { Model, Schema, model, Document as MongoDocument } from 'mongoose';
import { ISchemaAndModel } from '../interfaces/utils/modelAndSchemaResume';

export const schemaAndModel = <T extends MongoDocument>({ name, schema }: ISchemaAndModel): Model<T> => {
    const genericSchema = new Schema<T>(schema);
    return model<T>(name, genericSchema);
};