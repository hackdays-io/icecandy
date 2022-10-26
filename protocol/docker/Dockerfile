# イメージ指定
FROM node:16.15

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN yarn add -D \
  hardhat@^2.9.9 \
  dotenv@^16.0.1 \
  typescript@^4.7.3 \
  ts-node@^10.8.1

COPY ./hardhat.config.ts .

EXPOSE 8545