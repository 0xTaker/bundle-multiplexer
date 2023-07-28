/*//////////////////////////////////////////////////////////////
                            HANDLERS
//////////////////////////////////////////////////////////////*/

import { Wallet } from "ethers";
import BaseBuilderClient from "./src/builders/BaseBuilderClient";
import BlockNative from "./src/builders/BlockNative";
import BuildAI from "./src/builders/BuildAI";
import Builder0x69 from "./src/builders/Builder0x69";
import Flashbots from "./src/builders/Flashbots";
import Lightspeedbuilder from "./src/builders/Lightspeedbuilder";
import RSyncBuilder from "./src/builders/RSyncBuilder";
import SecureRPC from "./src/builders/SecureRPC";
import Ultrasoundmoney from "./src/builders/Ultrasoundmoney";
import { eth_sendBundleParams, RpcMethodHandler } from "./src/schema";
import { toRpcResponse } from "./src/utils";

const builders: BaseBuilderClient[] = [
    new BlockNative(),
    new BuildAI(),
    new Builder0x69(),
    new Flashbots(),
    new Lightspeedbuilder(),
    new RSyncBuilder(),
    new SecureRPC(),
    new Ultrasoundmoney(),
];

export const eth_sendBundle: RpcMethodHandler<eth_sendBundleParams> = async (id: number, bundle: eth_sendBundleParams) => {

    // Send to a bunch of builders
    const wallet = new Wallet(Wallet.createRandom().privateKey);
    const sentTo: string[] = [];

    for (const builder of builders) {
        try {
            await builder.sendBundle(wallet, null);
            sentTo.push(builder.url());
        } catch (e: any) {
            // Catch error
            console.log(e);
        }
    }

    return toRpcResponse(id, sentTo);
};