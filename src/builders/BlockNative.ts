import BaseBuilderClient from "./BaseBuilderClient";

export default class BlockNative extends BaseBuilderClient {
  url(): string {
    return "https://api.blocknative.com/v1/auction";
  }
  headers(signature: string): any {
    return {
      "X-Auction-Signature": signature,
    };
  }
}
