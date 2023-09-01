FROM node:20-alpine as builder

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3002

CMD ["yarn", "start"]