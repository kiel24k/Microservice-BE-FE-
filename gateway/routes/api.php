<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

route::get('show-product-list', [ProductController::class, 'showProductList']);

route::post('store-order', [OrderController::class, 'storeOrder']);

route::post('store-product', [ProductController::class, 'storeProduct']);



route::controller(AuthController::class)->group(function () {
    route::post('login', 'login');
});

route::middleware('jwt.verify')->group(function () {
    route::get('user', [AuthController::class, 'user']);
    route::get('show-user-order', [ProductController::class, 'showUserOrder']);
    route::get('show-orders', [OrderController::class, 'showOrders']);
});
