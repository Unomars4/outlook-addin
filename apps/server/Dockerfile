FROM node:20-alpine

# Install bash and curl
RUN apk add --no-cache bash curl

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

COPY . .

# Copy wait-for-it script
COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

EXPOSE 3000

CMD ["bash", "-c", "wait-for-it postgres:5432 -- pnpm start"]
