FROM node:alpine  
RUN apk add --update net-tools
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD node index.js