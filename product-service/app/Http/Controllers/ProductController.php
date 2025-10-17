<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;

use App\Models\Product;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller

{
    protected $product;
    public function __construct(ProductService $product)
    {
        $this->product = $product;
    }
    public function getProducts()
    {
        $product =  Product::get();
        return response()->json($product);
    }

    public function showProductById($id)
    {
        return $this->product->getProductById($id);
    }


    public function storeProduct(StoreProductRequest $request)
    {
        return $this->product->createProduct($request);
    }
}
