FROM node:16-stretch-slim


ENV TZ="Africa/Dar_es_Salaam"

COPY package*.json ./

RUN npm install  

COPY . .

EXPOSE 909

#HEALTHCHECK CMD curl -s --fail http://localhost:6020/healthz || exit 1


CMD [ "npm", "start" ]