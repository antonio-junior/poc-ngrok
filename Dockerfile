FROM node:12-alpine

USER node

COPY server.js ./

CMD ["node", "server.js"]