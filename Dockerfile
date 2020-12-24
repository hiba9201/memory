FROM node:10

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

ENV NODE_ENV="production"

COPY package*.json ./
RUN npm install --production

COPY public/ .
COPY src/components/icons src/components/icons

ENV PORT 80
EXPOSE 80

CMD node server.js
