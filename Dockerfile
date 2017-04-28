FROM node:6-slim
RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install --production
EXPOSE 9400
CMD [ "node", "server.js", "${$NODE_ENV}" ]
