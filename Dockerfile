FROM node:18-alpine

RUN npm install -g npm

ENV PUBLIC_POCKETBASE_URL=''
ENV PORT=4445

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

EXPOSE 4445
CMD ["node", "build/index.js"]