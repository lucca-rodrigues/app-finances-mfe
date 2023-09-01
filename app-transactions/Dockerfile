FROM node:20-alpine as builder

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3001

CMD ["yarn", "start"]