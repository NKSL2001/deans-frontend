FROM nginx:1.15.2-alpine
# you have to build before copy
COPY ./dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]