FROM php:8.3-cli

WORKDIR /var/www

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    wget \
    ca-certificates \
    gnupg \
    libzip-dev \
    libxml2-dev \
    libonig-dev \
    && update-ca-certificates \
    && docker-php-ext-install \
        pdo_mysql \
        mbstring \
        zip \
        xml \
        ctype \
        dom \
        simplexml \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer

# Copy full application first
COPY . .

# Copy dotenv
RUN cp .env.example .env

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --ignore-platform-reqs
RUN composer update

# Generate Laravel key BEFORE optimize
RUN php artisan key:generate



# Permissions
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache

# Switch to non-root user
USER www-data

EXPOSE 8001

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8001"]
