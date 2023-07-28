import BaseBuilderClient from "./BaseBuilderClient";

export default class BeaverBuild extends BaseBuilderClient {
    url(): string {
        return "https://rpc.beaverbuild.org/";
    }
    headers(signature: string): any {
        return {};
    }
}
