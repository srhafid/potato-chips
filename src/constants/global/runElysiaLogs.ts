import { propHelloWorld } from "@interfaces/constants/global/interfaceRunElysiaLogs";

export class RunElysianLogs {
    static helloWorld(props: propHelloWorld) {
        const { hostname, port } = props;
        return `🦊 Elysia is running at ${hostname}:${port}`;
    }
}