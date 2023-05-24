FROM node:20.2

WORKDIR /app

# アプリケーションのソースをバンドル
COPY ./app  ./
RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]
