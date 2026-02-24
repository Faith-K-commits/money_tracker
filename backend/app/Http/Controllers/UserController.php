<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users, email',
        ]);

        $user = User::create($request->only('name', 'email'));
        return response()->json($user, 201);
    }

    public function show($id)
    {
        $user = User::with('wallets.transactions')->findOrFail($id);

        return response()->json([
            'user' => $user,
            'wallets' => $user->wallets->map(function ($wallet) {
                return [
                    'id' => $wallet->id,
                    'name' => $wallet->name,
                    'balance' => $wallet->balance,
                ];
            }),
            'total_balance' => $user->total_balance
        ]);
    }
}
