# Use whatever version you are running locally (see node -v)
FROM node:18

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Cache dependencies
RUN npm config set cache /app/.npm-cache --global \
  && npm ci --only=production

# Add rest of the client code
# .dockerignore needs to skip node_modules
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]

