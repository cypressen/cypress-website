# unavalibale RIGHT NOW


FROM node:20.11.1-alpine

WORKDIR /app

COPY . .
EXPOSE 3000

RUN npm install -g npm@10.8.2

CMD ["npm", "run dev"]