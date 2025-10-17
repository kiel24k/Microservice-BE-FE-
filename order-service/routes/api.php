<?php

use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

route::controller(OrderController::class)->group(function () {
    route::get('show-orders', 'showOrders');
    route::post('store-order', 'storeOrder');
});
