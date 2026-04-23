FROM node:20-alpine3.18

RUN corepack enable yarn

WORKDIR /app

CMD ["sh", "-c", "yarn install && yarn dev --host 0.0.0.0"]
