<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;

class VerifyJwtWithAuthService
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
   public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json(['error' => 'Token missing'], 401);
        }

        // Call auth-service to verify
        $response = Http::withToken($token)
            ->post('http://localhost:8001/api/verify-token'); // auth-service endpoint

        if ($response->failed()) {
            return response()->json(['error' => 'Invalid or expired token'], 401);
        }

        // Optionally, attach user data to request
        $request->merge(['auth_user' => $response->json('user')]);

        return $next($request);
    }
}
