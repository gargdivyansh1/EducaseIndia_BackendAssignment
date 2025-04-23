# School Management API

A simple REST API built with Node.js, Express, and MySQL to manage schools and list them by proximity.

## Endpoints

Dummy data is added for testing of api

### Add School
- `POST /api/addSchool`
- Body:
```json
{
  "name": "ABC School",
  "address": "123 Road",
  "latitude": 26.8467,
  "longitude": 80.9462
}
