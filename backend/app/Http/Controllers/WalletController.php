<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Wallet;

class WalletController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'name' => 'required|string'
        ]);
        $wallet = Wallet::create($request->only('user_id', 'name'));

        return response()->json($wallet, 201);
    }

    public function show($id)
    {
        $wallet = Wallet::with('transactions')->findOrFail($id);

        return response()->json([
            'wallet' => $wallet,
            'balance' => $wallet->balance,
            'transactions' => $wallet->transactions
        ]);
    }
}
