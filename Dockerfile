FROM nginx:1.15.9-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html
