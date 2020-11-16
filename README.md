# LenderHomePage Tech Assessment

## Used Skills

-   Backend: Laravel
-   Frontend: Vue + Bootstrap
-   Database: MySQL

## How to Install the App

-   Backend Module Installation

    `composer install`

-   FrontEnd Module Installation

    `npm install`

-   Database configuration

    In `.env` file.

    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=
    ```

-   Finally to start the project

    Please run the following commands


    `php artisan key:generate`


    `php artisan jwt:secret`


    `php artisan migrate`


    `php artisan db:seed`


    `php artisan serve`
