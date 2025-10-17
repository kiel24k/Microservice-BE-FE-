<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function showOrders(): JsonResponse
    {
        $order = Order::get();
        return response()->json($order);
    }

    public function storeOrder(Request $request)
    {
        $order = Order::create([
            'user_id' => $request->user_id,
            'product_id' =>  $request->product_id,
            'quantity' =>  $request->quantity
        ]);

        return response()->json($order);
    }
}
