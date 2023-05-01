# Build stage
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm ci --only=production

COPY --from=build /app/build /app/build

EXPOSE 3000

CMD ["npm", "start"]
