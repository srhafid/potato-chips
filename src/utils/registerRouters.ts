import Elysia, { AnyElysia } from "elysia";

export const registerRouters = (app: Elysia, routers: AnyElysia[]): Elysia => {
    for (let router of routers) {
        app.use(router);
    }
    return app
}