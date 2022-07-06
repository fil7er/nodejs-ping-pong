FROM node:alpine

WORKDIR /home/node/app
COPY . /home/node/app

RUN npm install

EXPOSE 3002

CMD [ "node", "index.js" ]