FROM node:alpine
WORKDIR /app
COPY ./ ./
EXPOSE 3000
EXPOSE 3333
RUN npm install && \
    npm start