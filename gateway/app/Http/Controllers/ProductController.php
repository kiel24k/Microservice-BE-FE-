<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{

    public function showProductList()
    {
        $response = Http::get(config('app.product_service_url') . 'api/get-products');
        return response()->json($response->json());
    }
    public function showUserOrder(Request $request)
    {
        $token = $request->bearerToken();
        $response = Http::withToken($token)->get('http://localhost:8003/api/show-user-order');
        return response()->json($response->json());
    }

    public function storeProduct(Request $request)
    {
        $response = Http::post(config('app.product_service_url') .'api/store-product', $request->all());
        return response()->json($response->json());
    }
}
