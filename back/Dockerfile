# Etapa de desarrollo
FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci --force

COPY . .

# Etapa de construccion
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

COPY --from=development /app/node_modules ./node_modules

COPY . .

RUN npm run build

RUN npm ci --only=production --legacy-peer-deps && npm cache clean --force

# Etapa de produccion
FROM node:20-alpine as production

WORKDIR /app  

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./  

EXPOSE 3000

CMD ["node", "dist/main.js"]