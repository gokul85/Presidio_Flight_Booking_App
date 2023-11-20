# Flight Booking App 🛫🌍
This project comprises two main parts: `client` and `server`.

## Client 🖥️
The client-side is built using React. To run the client:

```
cd client
npm install
npm run dev
```

### In the client app, users can:

**User Authentication**: _Sign up or log in using unique usernames or emails._

**Flight Search**: _Easily search for flights by flight name, flight ID, or date._

**View Flights**: _See a list of available flights based on their search criteria._

**Book Flights**: _Users can book available flights._


## Server 🚀
Server-side is powered by Express, Node.js, and MongoDB. It manages the backend functionalities, including authentication, middleware for role-based authorization, and database operations. 
To run the server:

```
cd server
npm install
node index.js
```

### The server handles:

**User Authentication**: _Provides authentication endpoints for user sign-up and login._

**Role-Based Authorization**: _Ensures secure access based on user roles (user or admin)._

**Database Models**: _Manages user and flight models for CRUD operations._

**Frontend Operations**: _Supports frontend functionalities for flight booking._

## Default Credentials 🗝️
_**User Credentials:**_

Username: user or user@gmail.com

Password: 1234

_**Admin Credentials:**_

Username: admin or admin@gmail.com

Password: 1234


Users can log in using either their unique username or email
