
import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { registerRouters } from "./utils/registerRouters";
import { allRouters } from "./constants/allRouters";
import { connectDB } from "./databases/connect";
import { ServerStringMagicConfig } from "./constants/global/serverStringMagic";
import { RunElysianLogs } from "./constants/global/runElysiaLogs";
import { dotenvInit } from "./modules/envLoader/dotenvInit";


const runServer = (): any => {
  connectDB();

  const configServerStringMagic = ServerStringMagicConfig
  const mainApp = new Elysia()
  const app = registerRouters(mainApp, allRouters)

  app.use(swagger())
  app.listen(configServerStringMagic.port)

  const helloWorldLogs = RunElysianLogs

  console.log(
    helloWorldLogs.helloWorld({
      hostname: app.server?.hostname as string,
      port: app.server?.port as number,
    })
  );
}


dotenvInit()
  .then(() => {
    runServer();
  })
  .catch((error) => {
    console.error(error);
  })
