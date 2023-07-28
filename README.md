# Bundle Multiplexer using Nymphe

A JSON-RPC web server that forwards searcher bundles to various builders that support `eth_sendBundle`.

Built using [Nymphe](https://github.com/0xTaker/nymphe).
## Build and Run

To install the necessary dependencies:
```
yarn
```

This repository requires a set of environment variables to configure, that can be found inside of `.env.example`. Currently, this repo consists of simply:
```
PORT=3000
CHAIN_ID=0x1
```
Copy the contents of `.env.example` into a new file `.env`. Additional environment variables can be added and accessed within the code using `process.env.<ENV_NAME>` such as `process.env.CHAIN_ID`.

In order to build and start the application:
```
npm run build
npm start

```

A simple sanity check that it is on:
```
curl localhost:3000
> Hello World!

curl -X POST localhost:3000 -H 'Content-Type: application/json' -d '{ "id": 1, "jsonrpc": "2.0", "method": "eth_chainId", "params": []}'
> {"id":1,"result":"0x1"}
```