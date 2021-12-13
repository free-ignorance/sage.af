FROM mhart/alpine-node:14

COPY package*.json /tmp/

RUN apk add --update --no-cache bash git openssh

RUN cd /tmp && npm config set unsafe-perm true && npm install

WORKDIR /var/www
COPY . /var/www

RUN mv /tmp/node_modules node_modules

RUN cd /var/www && npm run build

EXPOSE 3431

CMD ["npm", "start"]