FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html
