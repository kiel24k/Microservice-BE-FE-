<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public function storeOrder(Request $request)
    {
        $response = Http::post(config('app.order_service_url') . '/api/store-order', $request->all());
        return response()->json($response->json());
    }

    public function showOrders(Request $request)
    {
        $token = $request->bearerToken(); //JWT token 

        //Orders
        $orders = Http::withToken($token)->get(config('app.order_service_url') . '/api/show-orders')->json();
        $ordersArr = collect($orders)->map(function ($order) use ($token) {
            // fetch user details
            $user = Http::withToken($token)->get(config('app.auth_service_url') . '/api/show-user/' . $order['user_id'])->json();


            //fetch product details
            $product = Http::get(config('app.product_service_url') . '/api/show-product/' . $order['product_id'])->json();
            return [
                'user' => $user,
                'product' => $product,
                'order' => $order
            ];
        });


        return response()->json($ordersArr);
    }
}
