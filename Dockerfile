FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 8011

ENV HOST=0.0.0.0
ENV PORT=8011

RUN yarn build

CMD [ "yarn", "start" ]