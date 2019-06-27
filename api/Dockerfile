FROM node:11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80


CMD ["npm", "start"]