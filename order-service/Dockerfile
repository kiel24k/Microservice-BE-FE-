# Use PHP 8.3 CLI
FROM php:8.3-cli

# Set working directory
WORKDIR /var/www

# Install system dependencies + PHP extensions
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libxml2-dev \
    libonig-dev \
    && docker-php-ext-install zip pdo pdo_mysql mbstring xml tokenizer ctype \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer (2.9)
COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer

# Copy composer files first for caching
COPY composer.json composer.lock ./

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Copy the rest of the application
COPY . .

# Copy .env.example to .env
RUN cp .env.example .env

# Set proper permissions for Laravel
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Generate application key and run migrations
RUN php artisan key:generate \
    && php artisan migrate --force

# Expose Laravel dev server port
EXPOSE 8001

# Start Laravel dev server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8003"]
