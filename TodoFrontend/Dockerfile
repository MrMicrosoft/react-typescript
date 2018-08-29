FROM node:8.9-alpine
RUN mkdir webapp
WORKDIR /webapp
COPY package.json .
RUN npm install --production --silent
COPY . .
EXPOSE 9000
CMD npm start