import BaseBuilderClient from "./BaseBuilderClient";

export default class Builder0x69 extends BaseBuilderClient {
  url(): string {
    return "https://builder0x69.io";
  }
  headers(signature: string): any {
    return {};
  }
}
