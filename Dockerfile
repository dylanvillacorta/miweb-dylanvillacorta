FROM nginx:1.27-alpine
COPY app/nginx.conf /etc/nginx/conf.d/default.conf
COPY app/frontend/ /usr/share/nginx/html/
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx
EXPOSE 80
