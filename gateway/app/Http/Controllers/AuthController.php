<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $response = Http::post('http://localhost:8001/api/auth-login', $request->all());
        return response()->json($response->json(), $response->status());
    }

    public function user(Request $request)
    {
        $token = $request->bearerToken();
        $response = Http::withToken($token)->get('http://localhost:8001/api/user');
        return response()->json($response->json());
    }
}
