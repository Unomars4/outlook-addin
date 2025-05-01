FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

# Force rebuild of native modules
RUN pnpm install --force

COPY . .

EXPOSE 3000

# Use ts-node with transpile-only to bypass type checking
CMD ["npx", "ts-node", "--transpile-only", "src/index.ts"]
