import BaseBuilderClient from "./BaseBuilderClient";

export default class RSyncBuilder extends BaseBuilderClient {
  url(): string {
    return "https://rsync-builder.xyz";
  }
  headers(signature: string): any {
    return {};
  }
}
