# Stage 2 - REST API Documentation

## Introduction

This document provides detailed information on how to use the REST API for managing persons. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on person resources in a database.

## Getting Started

### Prerequisites

Before using the API, ensure you have the following prerequisites:

- Node.js installed 
- MongoDB or your preferred database system installed and running
- Postman or a similar tool for testing API endpoints
- Git (optional)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Mide001/HNGx-Stage-2
2. Change directory to the project folder:                         
   `` cd your-api-repo``
3. Install dependencies:
``npm install``
4. Configure the database connection by editing the `.env` file with your database details.
5. Start the server:
``node server.js``

The API will be available at `http://localhost:your-port`.
### API Endpoints
#### Create a New Person

 -  **Endpoint:** `POST /api/`
 -  **Description:** Create a new person by providing the `fullName` and `description` in the request body.
 -  **Request Body:**
 - `{
  "fullName": "John Doe",
  "description": "A sample person"
}`

#### Fetch All Persons
-   **Endpoint:** `GET /api/`
-   **Description:** Retrieve a list of all persons.
- **Response:** 
- ```[
  {
    "_id": "person-id-1",
    "fullName": "John Doe",
    "description": "A sample person",
  },
  {
    "_id": "person-id-2",
    "fullName": "Jane Smith",
    "description": "Another sample person",
  }


#### Fetch a Person by ID

 - **Endpoint:**  `GET /api/:id`
 -   **Description:** Retrieve details of a person by their ID.
 - **Response:**
 

   ` {
  "_id": "person-id",
  "fullName": "John Doe",
  "description": "A sample person",
}`

#### Update a Person

 -   **Endpoint:** `PUT /api/:id`
 -    **Description:** Update details of a person by their ID.
 - **Request Body:**
 

   ` {
  "fullName": "Updated Name",
  "description": "Updated description"
}`

- **Response:**
`{
  "message": "User updated successfully."
}`

#### Delete a Person
- **Endpoint:**  `DELETE /api/:id`
-   **Description:** Delete a person by their ID.
- **Response:**
 `{
  "message": "User deleted successfully."
}
`

This documentation provides an overview of the REST API for managing persons. For more detailed information and sample API usage, please refer to the [GitHub repository](https://github.com/Mide001/hngx-stage2)
