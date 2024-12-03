export function singleton<T extends { new(...args: any[]): {} }>(referenceToClass: T) {
    let instance: any;
    return class extends referenceToClass {
        private constructor(...args: any[]) {
            super(...args);
            if (!instance) {
                instance = this;
            }
            return instance;
        }
    }
}