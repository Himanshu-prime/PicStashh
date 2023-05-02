FROM node:18
RUN npm update core-js svgo
WORKDIR app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .



EXPOSE 3000
CMD ["npm","start"]
