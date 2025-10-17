<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


route::get('get-products', [ProductController::class, 'getProducts']);
route::post('store-product', [ProductController::class, 'storeProduct'] );
route::get('show-product/{id}', [ProductController::class, 'showProductById']);
