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
            'email' => 'required|email|unique:users,email',
        ]);

        $user = User::create($request->only('name', 'email'));
        return response()->json($user, 201);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        // Get wallets with their balances
        $wallets = $user->wallets->map(function ($wallet) {
            return [
                'id' => $wallet->id,
                'name' => $wallet->name,
                'balance' => $wallet->balance,
            ];
        });
        $totalBalance = $wallets->sum('balance');
        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ],
            'wallets' => $wallets,
            'total_balance' => $totalBalance
        ]);
    }
}
