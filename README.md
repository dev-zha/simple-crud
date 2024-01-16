# Express.js CRUD API without Database

This project is a simple Express.js application that provides CRUD (Create, Read, Update, Delete) operations on an in-memory data store. It is designed for learning purposes and does not use a database.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```
git clone https://github.com/dev-zha/simple-crud
```

2. Navigate to the project directory:

```
cd simple-crud
```

3. Install dependencies:

```
npm install
```

### Usage

Start the Express server:

```
node app.js
```

The server will run on http://localhost:3000 by default.

Use tools like cURL, Postman, or a frontend application to interact with the CRUD endpoints:

- Get all items: GET http://localhost:3000/items
- Get a specific item: GET http://localhost:3000/items/1
- Create a new item: POST http://localhost:3000/items with JSON body
- Update an item: PUT http://localhost:3000/items/1 with JSON body
- Delete an item: DELETE http://localhost:3000/items/1

### Data Structure

Each item in the data store has the following structure:

```
{
  "id": 1,
  "title": "Item 1",
  "description": "Description for Item 1",
  "createdAt": "2024-01-16T12:00:00Z",
  "updatedAt": "2024-01-16T12:30:00Z"
}
```

### Validation

Validation has been added to ensure that the title and description fields are present, non-empty strings, and of the correct data type.
