FROM node:20-alpine as builder

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3000



CMD ["yarn", "start"]

## docker build -t app-finances .
## docker run -p 3000:3000 app-finances