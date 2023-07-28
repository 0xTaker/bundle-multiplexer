import BaseBuilderClient from "./BaseBuilderClient";

export default class BuildAI extends BaseBuilderClient {
  url(): string {
    return "https://buildai.net";
  }
  headers(signature: string): any {
    return {};
  }
}
