FROM node:alpine

WORKDIR /home/node/app
COPY . /home/node/app

RUN npm install

CMD [ "node", "index.js" ]