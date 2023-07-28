import axios from "axios";
import { id, Wallet } from "ethers";

export default abstract class BaseBuilderClient {
  abstract url(): string;
  abstract headers(bundle: any): any;

  async sendBundle(signer: Wallet, bundle: any): Promise<any> {
    const signature =
      signer.address +
      ":" +
      (await signer.signMessage(id(JSON.stringify(bundle))));

    return await axios.post(this.url(), bundle, {
      headers: this.headers(signature),
    });
  }
}
