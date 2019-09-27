FROM node:latest

LABEL maintainer="beingzeroin@gmail.com"

WORKDIR /usr/src/app

COPY . ./
# VOLUME [ "/usr/src/app" ]

WORKDIR /usr/src/app

RUN npm install
RUN npm install -g nodemon

ENV NODE_ENV=development
ENV PORT=3000

EXPOSE 3000

CMD [ "node", "index.js" ]
