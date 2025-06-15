# Next.js Authentication Project

A comprehensive authentication implementation in Next.js, demonstrating user authentication, protected routes, and session management.

## Features

- User registration and login
- Protected routes with authentication checks
- Session management
- Responsive authentication UI
- Secure password handling

## Technologies Used

- Next.js
- NextAuth.js
- MongoDB (for user data storage)
- Tailwind CSS (for styling)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nextjs-auth-main.git
    cd nextjs-auth-main
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    Create a `.env.local` file in the root directory with the following variables:
    ```
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_URL=http://localhost:3000
    GOOGLE_CLIENT_ID = your_client_id
    GOOGLE_CLIENT_SECRET = your_client_secret
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

4. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

## License

by Ali Mohamed