# Use PHP 8.3 CLI
FROM php:8.3-cli

WORKDIR /var/www

# Install system dependencies + required PHP extensions
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libxml2-dev \
    libonig-dev \
    && docker-php-ext-install zip pdo pdo_mysql mbstring xml tokenizer ctype \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer

# Copy composer files first
COPY composer.json composer.lock ./

# Copy .env.example to .env
RUN cp .env.example .env

# Install Laravel dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Copy the rest of the application
COPY . .

# Generate app key and run migrations
RUN php artisan key:generate \
    && php artisan optimize \
    && php artisan migrate --force
   

# Expose port for Laravel dev server
EXPOSE 8001

# Start Laravel dev server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8003"]
