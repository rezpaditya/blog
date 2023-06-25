FROM node:latest as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

COPY --from=build /usr/src/app/dist/blog /usr/share/nginx/html

EXPOSE 80
