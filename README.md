# School Management API

A REST API built with Node.js, Express, and MySQL to manage schools and list them by proximity.

## Railway is used for hosting 

## Base URL
`https://educaseindiabackendassignment-production-5428.up.railway.app`

## API Endpoints

### 1. Add a School
- **Method**: `POST`
- **Endpoint**: `/api/addSchool`
- **Description**: Adds a new school to the database
- **Request Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.3456,
    "longitude": 78.9012
  }

### 1. List Schools
- **Method**: `GET`
- **Endpoint**: `/api/listSchools`
- **Description**: List all the schools by sorting them according to the latitude and longitude provided
- **Response Body**:
  ```json
  {
        "id": 2,
        "name": "first school ",
        "address": "78459 ",
        "latitude": 71.5355,
        "longitude": 27.391,
        "distance": 3639.437274128159
    },
    {
        "id": 1,
        "name": "new School",
        "address": "789 ",
        "latitude": 21.5355,
        "longitude": 47.391,
        "distance": 4077.4516276757918
    },
    {
        "id": 3,
        "name": "second school ",
        "address": "7459 ",
        "latitude": 81.5355,
        "longitude": 67.391,
        "distance": 5098.172650690318
    },
    {
        "id": 4,
        "name": "second school agian",
        "address": "7459 ",
        "latitude": 81.5355,
        "longitude": 67.391,
        "distance": 5098.172650690318
    },
    {
        "id": 5,
        "name": "second school ",
        "address": "7459 ",
        "latitude": 81.5355,
        "longitude": 67.391,
        "distance": 5098.172650690318
    }


