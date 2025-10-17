<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

route::controller(AuthController::class)->group(function () {
    route::post('auth-register', 'register');
    route::post('auth-login', 'login');
});

route::middleware('jwt')->group(function () {
    route::get('/user', [AuthController::class, 'getUser']);
    route::post('/logout', [AuthController::class, 'logout']);
    route::get('show-user/{id}', [AuthController::class, 'showUser']);
});

Route::post('/verify-token', [AuthController::class, 'verifyToken']); //to verify token
