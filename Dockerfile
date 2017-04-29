FROM node:6-alpine

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app/

# Install PM2
RUN npm install -g pm2

RUN npm install

WORKDIR public

RUN npm run serve

EXPOSE 9400

CMD [ "pm2-docker", "ecosystem.json" ]
