import BaseBuilderClient from "./BaseBuilderClient";

export default class Ultrasoundmoney extends BaseBuilderClient {
  url(): string {
    return "https://relay.ultrasound.money";
  }
  headers(signature: string): any {
    return {};
  }
}
