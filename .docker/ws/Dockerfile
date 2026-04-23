FROM node:20-alpine3.18

RUN corepack enable yarn

WORKDIR /ws

CMD ["sh", "-c", "yarn install && node ws-server.js"]
