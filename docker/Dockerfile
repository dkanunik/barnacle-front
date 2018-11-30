FROM node:8
WORKDIR /barnacle
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --only=production
EXPOSE 4200
CMD [ "npm", "run", "front:start" ]
