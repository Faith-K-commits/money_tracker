<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Transaction;

class Wallet extends Model
{

    protected $fillable = [
        'name',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function getBalanceAttribute()
    {
        return $this->transactions->sum(function ($transaction) {
            return $transaction->type === 'income' ? $transaction->amount : -$transaction->amount;
        });
    }
}
