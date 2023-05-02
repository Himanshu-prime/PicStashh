FROM node:alpine AS build
WORKDIR app
COPY . .
RUN npm install



EXPOSE 3000
CMD["npm","run"]
