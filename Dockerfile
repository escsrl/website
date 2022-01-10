FROM node:12

ARG APP_ENV=prod
COPY ./ /app
WORKDIR /app
RUN yarn install && yarn generate

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
