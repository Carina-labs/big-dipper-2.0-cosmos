docker buildx build --platform=linux/amd64,linux/arm64,linux/arm/v7 \
--build-arg NEXT_PUBLIC_GRAPHQL_URL=https://dev-hasura.dev-supernova.xyz/v1/graphql \
--build-arg NEXT_PUBLIC_GRAPHQL_WS=wss://dev-hasura.dev-supernova.xyz/v1/graphql \
--build-arg NEXT_PUBLIC_RPC_WEBSOCKET=wss://dev-supernova-tm.dev-supernova.xyz/websocket \
--build-arg NEXT_CHAIN_TYPE=testnet \
--build-arg NODE_ENV=development \
--build-arg PORT=8000 \
-t a41ventures/big-dipper-2.0:nova-devnet --push .
