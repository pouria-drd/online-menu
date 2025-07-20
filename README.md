# Online Menu

**Online Menu** is a next-js app designed to help restaurants and coffee shops manage their online menus. This app allows restaurant owners to create and manage menu categories and products efficiently. Customers can browse menu categories and view product details through a well-structured interface.

## 🚀 Getting Started

To set up the development environment, follow these steps:

### 📥 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/pouria-drd/online-menu.git
    ```
2. Navigate to the project directory:
    ```bash
    cd online-menu
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### ⚙️ .env Configuration

Create a `.env` file in the root directory to configure environment variables. Example:

```env
# Set the base path for the application
NEXT_PUBLIC_BASE_PATH=""

# Set the base API URL
BASE_API_URL="http://127.0.0.1:8000"

# Set the timeout for server actions
timeout=10000

# Set the token names for access and refresh tokens
ACCESS_TOKEN_NAME="access"
REFRESH_TOKEN_NAME="refresh"

# Set the token lifetimes for access and refresh tokens
ACCESS_TOKEN_LIFETIME=15 # in minutes
REFRESH_TOKEN_LIFETIME=24 # in hours
```

Ensure the `.env` file is added to `.gitignore` to keep sensitive information private.

### ▶️ Running the Development Server

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 License

This project is licensed under the **MIT License**.
