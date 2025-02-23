# syntax=docker/dockerfile:1

FROM node:lts-alpine
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
ENV NODE_ENV=production
WORKDIR /app
COPY ["keep_alive.js","package.json", "package-lock.json*", "./"]
RUN npm install --omit=dev
COPY server.js ./
CMD [ "node", "server.js" ]
