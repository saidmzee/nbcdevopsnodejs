FROM node:16-stretch-slim


ENV TZ="Africa/Dar_es_Salaam"

COPY package*.json ./

RUN npm install  

COPY . .

EXPOSE 909




CMD [ "npm", "start" ]