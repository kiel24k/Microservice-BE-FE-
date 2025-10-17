FROM php:8.3-cli
WORKDIR /var/www
COPY . .
RUN apt-get update && apt-get install -y unzip libzip-dev && docker-php-ext-install zip
RUN php artisan config:clear
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
