FROM node:10-alpine as node

COPY . /app
WORKDIR /app
RUN yarn install && yarn build

FROM nginx:1.17-alpine

COPY --from=node /app/dist /usr/share/nginx/html