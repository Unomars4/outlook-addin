FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 5173

# Use --host to allow external connections
CMD ["pnpm", "dev", "--host"]

