import BaseBuilderClient from "./BaseBuilderClient";

export default class SecureRPC extends BaseBuilderClient {
  url(): string {
    return "https://api.securerpc.com/v1";
  }
  headers(signature: string): any {
    return {};
  }
}
