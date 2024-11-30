
interface propHelloWorld {
    hostname: string;
    port: number;
}
export class RunElysianLogs {
    static helloWorld(props: propHelloWorld) {
        const { hostname, port } = props;
        return `🦊 Elysia is running at ${hostname}:${port}`;
    }
}