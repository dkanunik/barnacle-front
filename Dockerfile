FROM node:8

RUN apt-get update

USER node

RUN mkdir ~/.npm-global
RUN mkdir ~/app
RUN npm config set prefix '~/.npm-global'
RUN export PATH=~/.npm-global/bin:$PATH
RUN /bin/bash -c "source ~/.profile"

WORKDIR /home/node/app

RUN npm config set unsafe-perm=true

COPY package*.json ./

RUN npm install --unsafe-perm=true --allow-root --only=production

COPY . .

RUN npm run build

RUN rm -rf /home/node/app/dist

EXPOSE 4200

CMD [ "npm", "run", "front:remote:start" ]
