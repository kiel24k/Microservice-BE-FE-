FROM php:8.3-cli

WORKDIR /var/www

# Install system dependencies + PHP extensions
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libxml2-dev \
    libonig-dev \
    build-essential \
    pkg-config \
    curl \
&& docker-php-ext-install pdo_mysql mbstring zip xml tokenizer ctype \
&& apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer

# Copy composer files and install dependencies
COPY composer.json composer.lock ./
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Copy application
COPY . .

# Copy .env
RUN cp .env.example .env

# Set permissions
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Switch to www-data user for artisan commands
USER www-data

# Expose port
EXPOSE 8001

# Start Laravel dev server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8001"]
