import BaseBuilderClient from "./BaseBuilderClient";

export default class Lightspeedbuilder extends BaseBuilderClient {
  url(): string {
    return "https://rpc.lightspeedbuilder.info";
  }
  headers(signature: string): any {
    return {
      "X-Flashbots-Signature": signature,
    };
  }
}
