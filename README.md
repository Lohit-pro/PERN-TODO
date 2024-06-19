# 📝 PERN Todo Application

Welcome to the PERN Todo Application! This project is built using PostgreSQL, Express.js, React, and Node.js.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 📦 Install Dependencies

First, install the necessary dependencies for both the server and client:

1. **Server**:
    ```bash
    cd server
    npm install
    ```

2. **Client**:
    ```bash
    cd client
    npm install
    ```

### 💻 Running the Application

After installing the dependencies, you can run the server and the client. Follow the steps below:

1. **Run the Server**:
    ```bash
    cd server
    node index
    ```
    The server will start running on port 5000.

2. **Run the Client**:
    ```bash
    cd client
    npm start
    ```
    The client will start on port 3000 (default for Create React App).

### 🛠️ Configuration

Make sure your PostgreSQL database is set up correctly. You can use the following SQL commands to create the database and table:

```sql
CREATE DATABASE perntodo;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```
Update the db.js file in the server directory with your PostgreSQL configuration:

```const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "your_password",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
```

Happy coding! 😃
