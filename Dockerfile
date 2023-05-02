FROM node:12.2.0-alpine
RUN npm update core-js svgo
WORKDIR app
COPY . .
RUN npm install



EXPOSE 3000
CMD ["npm","start"]
