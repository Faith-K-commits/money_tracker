# Money Tracker API

A RESTful API for managing personal finances, built with Laravel 12. Track income and expenses across multiple wallets, and monitor your financial health with ease.

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Database Schema](#-database-schema)
- [API Endpoints](#-api-endpoints)
- [Usage Examples](#-usage-examples)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [License](#-license)

## Features

- **User Management**: Create and manage user accounts
- **Multi-Wallet Support**: Create multiple wallets per user for different purposes (e.g., savings, checking, cash)
- **Transaction Tracking**: Record income and expense transactions with detailed descriptions
- **Automatic Balance Calculation**: Real-time balance computation for each wallet
- **Total Balance Overview**: Get aggregated balance across all user wallets
- **RESTful API**: Clean and intuitive API endpoints
- **Data Validation**: Robust request validation to ensure data integrity
- **Laravel Sanctum**: API authentication support (ready for token-based auth)

## Tech Stack

- **Framework**: Laravel 12.x
- **PHP**: 8.2+
- **Database**: MySQL
- **Authentication**: Laravel Sanctum 4.x
- **Code Quality**: Laravel Pint (PHP CS Fixer)
- **Package Manager**: Composer 2.x

## Prerequisites

Before you begin, ensure you have the following installed:

- **PHP** >= 8.2
- **Composer** >= 2.0
- **SQLite** (default) or MySQL/PostgreSQL

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Faith-K-commits/money_tracker.git
cd money_tracker/backend
```

### 2. Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

### 3. Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 4. Database Setup

The project uses SQLite by default. To use a different database, update the `.env` file:

```env
# For MySQL
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=money_tracker
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Run migrations to create the database tables:

```bash
php artisan migrate
```

### 5. Start the Development Server

Or start services individually:

```bash
# Start the Laravel development server
php artisan serve
```

The API will be available at `http://localhost:8000`

## Database Schema

### Users Table

| Column     | Type      | Description           |
| ---------- | --------- | --------------------- |
| id         | bigint    | Primary key           |
| name       | string    | User's full name      |
| email      | string    | Unique email address  |
| password   | string    | Hashed password       |
| created_at | timestamp | Creation timestamp    |
| updated_at | timestamp | Last update timestamp |

### Wallets Table

| Column     | Type      | Description                           |
| ---------- | --------- | ------------------------------------- |
| id         | bigint    | Primary key                           |
| user_id    | bigint    | Foreign key to users table            |
| name       | string    | Wallet name (e.g., "Savings", "Cash") |
| created_at | timestamp | Creation timestamp                    |
| updated_at | timestamp | Last update timestamp                 |

### Transactions Table

| Column      | Type              | Description                             |
| ----------- | ----------------- | --------------------------------------- |
| id          | bigint            | Primary key                             |
| wallet_id   | bigint            | Foreign key to wallets table            |
| type        | enum              | Transaction type: 'income' or 'expense' |
| amount      | decimal(12,2)     | Transaction amount                      |
| description | string (nullable) | Transaction description                 |
| created_at  | timestamp         | Creation timestamp                      |
| updated_at  | timestamp         | Last update timestamp                   |

## API Endpoints

### Users

#### Create User

```http
POST /api/users
```

**Request Body:**

```json
{
    "name": "John Doe",
    "email": "john@example.com"
}
```

**Response:** `201 Created`

```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2026-02-25T10:30:00.000000Z",
    "updated_at": "2026-02-25T10:30:00.000000Z"
}
```

#### Get User Details

```http
GET /api/users/{id}
```

**Response:** `200 OK`

```json
{
    "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "created_at": "2026-02-25T10:30:00.000000Z",
        "updated_at": "2026-02-25T10:30:00.000000Z"
    },
    "wallets": [
        {
            "id": 1,
            "name": "Savings Account",
            "balance": 5000.0
        },
        {
            "id": 2,
            "name": "Cash",
            "balance": 250.0
        }
    ],
    "total_balance": 5250.0
}
```

### Wallets

#### Create Wallet

```http
POST /api/wallets
```

**Request Body:**

```json
{
    "user_id": 1,
    "name": "Savings Account"
}
```

**Response:** `201 Created`

```json
{
    "id": 1,
    "user_id": 1,
    "name": "Savings Account",
    "created_at": "2026-02-25T10:35:00.000000Z",
    "updated_at": "2026-02-25T10:35:00.000000Z"
}
```

#### Get Wallet Details

```http
GET /api/wallets/{id}
```

**Response:** `200 OK`

```json
{
    "balance": 5000.0,
    "transactions": [
        {
            "id": 1,
            "wallet_id": 1,
            "type": "income",
            "amount": 5000.0,
            "description": "Monthly salary",
            "created_at": "2026-02-25T10:40:00.000000Z",
            "updated_at": "2026-02-25T10:40:00.000000Z"
        }
    ]
}
```

### Transactions

#### Create Transaction

```http
POST /api/transactions
```

**Request Body:**

```json
{
    "wallet_id": 1,
    "type": "income",
    "amount": 5000.0,
    "description": "Monthly salary"
}
```

**Response:** `201 Created`

```json
{
    "id": 1,
    "wallet_id": 1,
    "type": "income",
    "amount": 5000.0,
    "description": "Monthly salary",
    "created_at": "2026-02-25T10:40:00.000000Z",
    "updated_at": "2026-02-25T10:40:00.000000Z"
}
```

**Validation Rules:**

- `wallet_id`: Required, must exist in wallets table
- `type`: Required, must be either 'income' or 'expense'
- `amount`: Required, numeric, minimum 0.01
- `description`: Optional, string

## Usage Examples

### Complete Workflow Example

```bash
# 1. Create a user
curl -X POST http://localhost:8000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Smith","email":"alice@example.com"}'

# 2. Create a wallet for the user
curl -X POST http://localhost:8000/api/wallets \
  -H "Content-Type: application/json" \
  -d '{"user_id":1,"name":"Main Wallet"}'

# 3. Add an income transaction
curl -X POST http://localhost:8000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{"wallet_id":1,"type":"income","amount":3000,"description":"Freelance payment"}'

# 4. Add an expense transaction
curl -X POST http://localhost:8000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{"wallet_id":1,"type":"expense","amount":150,"description":"Groceries"}'

# 5. Check wallet balance
curl http://localhost:8000/api/wallets/1

# 6. Check user's total balance across all wallets
curl http://localhost:8000/api/users/1
```

## Project Structure

```
backend/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── TransactionController.php  # Handles transaction operations
│   │       ├── UserController.php         # Handles user operations
│   │       └── WalletController.php       # Handles wallet operations
│   └── Models/
│       ├── Transaction.php                # Transaction model with wallet relationship
│       ├── User.php                       # User model with wallets relationship
│       └── Wallet.php                     # Wallet model with transactions & balance logic
├── database/
│   ├── migrations/                        # Database schema migrations
│   └── seeders/                           # Database seeders
├── routes/
│   ├── api.php                           # API route definitions
│   └── web.php                           # Web route definitions
├── tests/                                # PHPUnit tests
├── .env.example                          # Environment configuration template
├── composer.json                         # PHP dependencies
├── package.json                          # Node.js dependencies
└── README.md                             # This file
```

## Key Implementation Details

### Balance Calculation

Wallet balances are calculated dynamically using an Eloquent accessor in the `Wallet` model:

```php
public function getBalanceAttribute()
{
    return $this->transactions->sum(function ($transaction) {
        return $transaction->type === 'income' ? $transaction->amount : -$transaction->amount;
    });
}
```

This ensures balance is always accurate and reflects the current state of all transactions.

### Data Validation

All API requests are validated using Laravel's Form Request Validation:

- **Users**: Name and unique email required
- **Wallets**: Valid user ID and wallet name required
- **Transactions**: Valid wallet ID, transaction type (income/expense), positive amount required

### Database Relationships

- **User** → **Wallets** (One-to-Many): A user can have multiple wallets
- **Wallet** → **Transactions** (One-to-Many): A wallet can have multiple transactions
- **Cascade Deletes**: Deleting a user removes all their wallets; deleting a wallet removes all its transactions
