# icecandy

## フロントエンド開発環境立ち上げ方法

### ローカルネット立ち上げ

```
$ cd protocol
$ docker-compose up -d
```

### ローカルネットにコントラクトデプロイ

```
$ yarn deploy:local
```

デプロイ後表示される Profile address をフロントの環境変数 `NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS` に入力

### フロントエンド立ち上げ

```
$ cd frontend
$ yarn dev
```

### 環境変数説明

| 環境変数                                | 説明                                  | ローカルデフォルト値  |
| --------------------------------------- | ------------------------------------- | --------------------- |
| NEXT_PUBLIC_PROVIDER_RPC                | RPC エンドポイント                    | http://127.0.0.1:8545 |
| NEXT_PUBLIC_CHAIN_ID                    | チェーン ID                           | 31337                 |
| NEXT_PUBLIC_ALCHEMY_API_KEY_ETH         | AlchemyAPIKey for ethereum            |                       |
| NEXT_PUBLIC_ALCHEMY_API_KEY_POLYGON     | AlchemyAPIKey for polygon             |                       |
| NEXT_PUBLIC_ALCHEMY_API_KEY_ARBITRUM    | AlchemyAPIKey for arbitrum            |                       |
| NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS | プロフィール NFT コントラクトアドレス |                       |
