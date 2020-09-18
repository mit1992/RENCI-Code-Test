# Base image
FROM node:10.13.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY app/public /usr/src/app/public
COPY app/src    /usr/src/app/src
COPY app/package.json      /usr/src/app/package.json
COPY app/.env      /usr/src/app/.env

ENV NODE_VERSION 10.13.0
RUN npm install
ENV PATH /usr/src/app/node_modules/.bin:${PATH}

EXPOSE ${TX_CLIENT_PORT}

CMD ["npm", "start"]


