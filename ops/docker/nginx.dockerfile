FROM nginx:latest

COPY ./ops/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./ops/nginx/django.conf /etc/nginx/sites-enabled/
COPY ./src/server/staticfiles /app/src/server/staticfiles
