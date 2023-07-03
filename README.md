
# BookThatShow

BookThatShow is an intuitive online platform for booking movie tickets. It provides a user-friendly interface to effortlessly browse movies, select showtimes, and reserve seats. The platform offers comprehensive information about each movie, including show timings and seat availability. It also has a feature to access the details of previous bookings. With BookThatShow, you can enjoy a hassle-free ticket booking experience.

# Deployment Links
click on the line to see the project

Frontend on netlify.com

https://book-that-show.netlify.app/

Backend on cyclic.sh

https://spring-green-turtle-hat.cyclic.app/api/booking


# API Documentation

### Base URL
https://spring-green-turtle-hat.cyclic.app/


## Authentication
This API does not require authentication.

## Endpoints
### 1. Create Movie Booking
Create a new movie booking.

#### Endpoint: /api/booking

### HTTP Method: POST

#### Request Body:

```json
{
  "movie": "Tenet",
  "seats": {
    "A1": 6,
    "A2": 8,
    "A3": 4,
    "A4": 2,
    "D1": 3,
    "D2": 5
  },
  "slot": "01:00 PM"
}
```

#### Response:

```json
{
  "seats": {
    "A1": 6,
    "A2": 8,
    "A3": 4,
    "A4": 2,
    "D1": 3,
    "D2": 5
  },
  "_id": "64a2fc189fec51ae2cd4ebc7",
  "movie": "Tenet",
  "slot": "01:00 PM",
  "createdAt": "2023-07-03T16:49:28.481Z",
  "updatedAt": "2023-07-03T16:49:28.481Z",
  "__v": 0
}
```
### 2.Get Last Movie Booking Details

Retrieve the details of the latest movie booking.

#### Endpoint: /api/booking

### HTTP Method: GET

#### Response:

```json
{
  "seats": {
    "A1": 6,
    "A2": 8,
    "A3": 4,
    "A4": 2,
    "D1": 3,
    "D2": 5
  },
  "_id": "64a2fc189fec51ae2cd4ebc7",
  "movie": "Tenet",
  "slot": "01:00 PM",
  "createdAt": "2023-07-03T16:49:28.481Z",
  "updatedAt": "2023-07-03T16:49:28.481Z",
  "__v": 0
}
```
## Installation
If you want to work on this project clone this repo

 git clone https://github.com/Nikhil-Shahare/MovieBookingSite.git

open this project on your local IDE and in the terminal do this commands one by one
### for Frotend
cd frontend

npm install

npm start
### for backend
cd backend

npm install

npm start 

This will start you frontend part in http://localhost:3000 and backend part running in http://localhost:8080

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

#### Note your mongodb clustur connect key

#### API_KEY
### MONGOURI : 
mongodb+srv://user_name:@cluster0.adfedxd.mongodb.net/<batabase_name>?retryWrites=true&w=majority




## How to use

To use our website, please follow these steps:

1. Visit our website by clicking on the following link: [https://book-that-show.netlify.app/](https://book-that-show.netlify.app/).

2. select your desired movie, time schedule, and seats.

3. Click on the "Book Show" button and ensure to review any confirmation or error pop-up window that appears.

4. Your previous movie ticket details will be displayed on the right side of the screen for easy reference.

   By following these steps, you can easily navigate our website, select your preferred movie, and book your desired seats. 

## Tech Stack
### Frontend: 
React js,Bootstrap

### backend: 
Node js, Express js ,

### database: 
Mongodb

This is a MERN stack project
