import { Model, Schema, model, Document as MongoDocument } from 'mongoose';

interface ISchemaAndModel {
    name: string,
    schema: Record<string, unknown>
}

export const schemaAndModel = <T extends MongoDocument>({ name, schema }: ISchemaAndModel): Model<T> => {
    const genericSchema = new Schema<T>(schema);
    return model<T>(name, genericSchema);
};