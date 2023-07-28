import { JsonRpcError, JsonRpcPayload, JsonRpcResult } from "ethers";
import { eth_sendBundle } from "../handlers";
import { RPCInputSchema, zEth_sendBundleParams } from "./schema";
import { toRpcError, toRpcResponse } from "./utils";

export class Rpc {
    async process(result: JsonRpcPayload): Promise<JsonRpcResult | JsonRpcError> {
        let _parseResult = RPCInputSchema.safeParse(result);
        if (!_parseResult.success) return toRpcError(1, { code: 200, message: "Your JSON-RPC payload data does not fit the required RPC format" });

        let { id, method, params } = _parseResult.data;
        switch (method) {
            case "eth_chainId":
                return toRpcResponse(id, process.env.CHAIN_ID);
            case "eth_sendBundle":
                const bundleParseResult = zEth_sendBundleParams.safeParse(params[0]);
                if (!bundleParseResult.success) return toRpcError(id, { code: 404, message: "Invalid format of bundle" });
                return await eth_sendBundle(id, bundleParseResult.data);
            default:
                return toRpcError(id, { code: 404, message: "Method not valid" });
        }
    }
}