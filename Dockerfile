FROM nginx:1.27-alpine
COPY src/nginx.conf /etc/nginx/conf.d/default.conf
COPY src/index.html src/styles.css src/script.js /usr/share/nginx/html/
COPY src/icons/ /usr/share/nginx/html/icons/
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx
EXPOSE 80
