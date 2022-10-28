# icecandy

## フロントエンド開発環境立ち上げ方法

### ローカルネット立ち上げ

```
$ cd protocol
$ docker-compose up -d
```

### ローカルネットの設定

[こちら](https://github.com/hackdays-io/mint-rally/blob/main/docs/localnode.md#2-setup-localnetwork-in-metamask-and-add-a-local-wallet-address)を参照しながら 2 と 3 をやる。もうすでにやってる場合は必要なし。

ローカルネットでテストする場合は、./protocol/.env に LOCAL_PRIVATE_KEY だけセットしておいたら大丈夫。

### ローカルネットにコントラクトデプロイ

```
$ yarn deploy:local
```

デプロイ後表示される Profile address をフロントの環境変数 `NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS` に入力。

### フロントエンド立ち上げ

環境変数は./frontend.env.example を参照しながら、./frontend/.env.local にいれる。

```
$ cd frontend
$ yarn dev
```

### 環境変数説明

| 環境変数                                | 説明                                  | ローカルデフォルト値                                                                                 |
| --------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_PROVIDER_RPC                | RPC エンドポイント                    | http://127.0.0.1:8545                                                                                |
| NEXT_PUBLIC_CHAIN_ID                    | チェーン ID                           | 31337                                                                                                |
| NEXT_PUBLIC_ALCHEMY_API_KEY_ETH         | AlchemyAPIKey for ethereum            |                                                                                                      |
| NEXT_PUBLIC_ALCHEMY_API_KEY_POLYGON     | AlchemyAPIKey for polygon             |                                                                                                      |
| NEXT_PUBLIC_ALCHEMY_API_KEY_ARBITRUM    | AlchemyAPIKey for arbitrum            |                                                                                                      |
| NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS | プロフィール NFT コントラクトアドレス |                                                                                                      |
| NEXT_PUBLIC_CONTRACT_POAP               | POAP コントラクトアドレス             | 0x22c1f6050e56d2876009903609a2cc3fef83b415                                                           |
| NEXT_PUBLIC_XDAI_PROVIDER_RPC           | xDAI チェーン RPC                     | https://thrumming-orbital-brook.xdai.discover.quiknode.pro/7ec7d424b29c0bf3f78e73af5bb41986efab5bb3/ |
