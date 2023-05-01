# Use whatever version you are running locally (see node -v)
FROM node:18 AS base

WORKDIR /app

# Install dependencies (you are already in /app)
COPY package.json package-lock.json ./
RUN npm ci

# Second stage, copy source code and run application
FROM base AS final
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
