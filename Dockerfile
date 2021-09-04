FROM node:12.7-alpine AS builder

ARG PORT

WORKDIR /app

COPY / ./

COPY package*.json ./

RUN echo $PORT

RUN npm install -g @angular/cli@10.0.4 && \
    npm install && \
    ng build
    
COPY . .

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
