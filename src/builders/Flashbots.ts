import BaseBuilderClient from "./BaseBuilderClient";

export default class Flashbots extends BaseBuilderClient {
  url(): string {
    return "https://relay.flashbots.net";
  }
  headers(signature: string): any {
    return {
      "X-Flashbots-Signature": signature,
    };
  }
}
