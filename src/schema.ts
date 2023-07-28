import { JsonRpcError, JsonRpcResult } from "ethers";
import z from "zod";

/*//////////////////////////////////////////////////////////////
                            UTILS
//////////////////////////////////////////////////////////////*/

export type RpcMethodHandler<T> = (id: number, params: T) => Promise<JsonRpcResult | JsonRpcError>;
export const zAddress = z.string().startsWith("0x").length(42).regex(/[0-9A-z]/g);

/*//////////////////////////////////////////////////////////////
                        SUPPORTED METHODS
//////////////////////////////////////////////////////////////*/

// EDIT: ADD MORE METHODS
export const RPCSupportedMethodsEnum = z.enum([
    "eth_chainId",
    "eth_sendBundle"
]);

export type RPCSupportedMethods = z.infer<typeof RPCSupportedMethodsEnum>;

export const RPCInputSchema = z.object({
    id: z.number(),
    jsonrpc: z.string(),
    method: RPCSupportedMethodsEnum,
    params: z.union([z.tuple([]), z.tuple([z.any()]).rest(z.any())])
});
export type RPCInput = z.infer<typeof RPCInputSchema>;

/*//////////////////////////////////////////////////////////////
                        METHOD HANDLERS
//////////////////////////////////////////////////////////////*/

export const zChainIdParams = z.void();
export type chainIdParams = z.infer<typeof zChainIdParams>;

export const zEth_transaction = z.object({
    hash: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    value: z.bigint().optional(),
    data: z.string(),
    chainId: z.number().nonnegative(),
    maxFeePerGas: z.bigint().nonnegative().optional(),
    maxPriorityFeePerGas: z.bigint().nonnegative().optional(),
    gasLimit: z.bigint().optional(),
    gasPrice: z.bigint().optional()
})

export const zEth_sendBundleParams = z.object({
    txs: z.array(z.string().or(zEth_transaction)),
    blockNumber: z.string().optional(),
    minTimestamp: z.number().optional(),
    maxTimestamp: z.number().optional(),
    replacementUuid: z.string().optional(),

    // RefundRecipient
    refundRecipient: z.string().optional(),
    refundIndex: z.number().optional()
});
export type eth_sendBundleParams = z.infer<typeof zEth_sendBundleParams>;