# Use a fixed PHP 8.3 CLI version
FROM php:8.3-cli

# Set working directory
WORKDIR /var/www

# Install system dependencies with fixed versions
RUN apt-get update && apt-get install -y \
    unzip=6.1-8+deb11u3 \
    git=1:2.30.2-1+deb11u1 \
    libzip-dev=1.7.3-1.1+deb11u1 \
    libxml2-dev=2.9.10+dfsg-6.8+deb11u4 \
    && docker-php-ext-install zip pdo pdo_mysql mbstring xml tokenizer ctype \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install a fixed Composer version (2.9)
COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer
RUN composer self-update --2.9

# Copy only composer files first (for caching)
COPY composer.json composer.lock ./

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Copy the rest of the application
COPY . .

# Clear Laravel caches
RUN php artisan config:clear \
    && php artisan cache:clear \
    && php artisan route:clear \
    && php artisan view:clear

# Expose Laravel dev server port
EXPOSE 8003

# Start Laravel dev server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8003"]
