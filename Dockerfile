FROM node:6.10.3

WORKDIR /app
COPY . .
RUN ["npm", "install", "express-generator", "-g"]
RUN ["npm", "install"]
