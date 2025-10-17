<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductService
{
    public function createProduct($data): JsonResponse
    {
        $product = Product::create([
            'product_name' => $data['product_name'],
            'product_price' => $data['product_price'],
            'product_description' => $data['product_description']
        ]);
        return response()->json($product);
    }

    public function getProductById($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }
}
