<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed, redirect to dashboard
            return response()->json(['success' => true], 200);
        }

        // Authentication failed
        return response()->json(['success' => false, 'message' => 'Invalid credentials.'], 401);
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }
}
