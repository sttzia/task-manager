# Task Manager

A simple task management application built with JavaScript, Node.js, Express, and MongoDB.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- View all tasks

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install dependencies for the backend:

   ```sh
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```

## Configuration

1. Set up MongoDB:
   - Ensure MongoDB is running on your local machine or update the connection string in `backend/config/database.js`.

## Running the Application

1. Start the backend server:

   ```sh
   cd backend
   npm start
   ```

2. Open `frontend/index.html` in your browser to use the application.

## API Endpoints

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   └── server.js
├── frontend/
│   ├── scripts/
│   │   ├── api.js
│   │   └── app.js
│   ├── styles/
│   │   └── styles.css
│   └── index.html
└── README.md
```

## License

This project is licensed under the MIT License.
