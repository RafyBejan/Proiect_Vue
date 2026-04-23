FROM node:20-alpine3.18

RUN corepack enable yarn

WORKDIR /api

CMD ["sh", "-c", "yarn install && node api-express.js"]
