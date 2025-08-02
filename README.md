# Uber-Project

live:https://uber-project-frontend.onrender.com/

A full-stack Uber-like ride booking application built with **React** (frontend), **Node.js/Express** (backend), **MongoDB** (database), **Socket.IO** (real-time communication), and **Leaflet.js** for live location tracking. The backend uses **OpenRouteService (ORS)** for geocoding, routing, and distance calculations.

---

## Features

- **User & Captain Authentication:** Register, login, and profile management for users and captains.
- **Live Location Tracking:** Real-time user/captain location updates using browser geolocation and Leaflet.js maps.
- **Ride Booking:** Users can search for pickup/destination, view fare estimates, and book rides.
- **Captain Matching:** Captains receive ride requests if they are within a certain radius of the pickup location.
- **Real-Time Updates:** Ride status, confirmations, and location updates via Socket.IO.
- **OTP Verification:** Secure ride start with OTP.
- **Ride Completion:** Captains can finish rides and update ride status.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, react-leaflet, Socket.IO client
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO server, OpenRouteService API
- **Maps:** Leaflet.js (OpenStreetMap tiles), OpenRouteService for backend geocoding/routing

---

## Folder Structure

```
Uber-Project/
├── Backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   ├── socket.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── .env
```

---

## Setup Instructions

### 1. **Clone the repository**

```sh
git clone <your-repo-url>
cd Uber-Project
```

### 2. **Backend Setup**

- Go to the `Backend` folder:

```sh
cd Backend
```

- Install dependencies:

```sh
npm install
```

- Create a `.env` file with your secrets:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
ORS_API_KEY=<your-openrouteservice-api-key>
```

- Start the backend server:

```sh
node server.js
```
or (if using nodemon)
```sh
npx nodemon server.js
```

### 3. **Frontend Setup**

- Go to the `frontend` folder:

```sh
cd ../frontend
```

- Install dependencies:

```sh
npm install
```

- Create a `.env` file:

```
VITE_BASE_URL=http://localhost:3000
```

- Start the frontend dev server:

```sh
npm run dev
```

---

## Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Register as a user or captain.
- Users can search for rides, confirm, and track their ride.
- Captains receive ride requests and can accept/start/finish rides.
- Live location is tracked and displayed on the map.

---

## API Endpoints

### **Backend**

- `/users/register` - Register user
- `/users/login` - Login user
- `/users/profile` - Get user profile
- `/users/logout` - Logout user
- `/captains/register` - Register captain
- `/captains/login` - Login captain
- `/captains/profile` - Get captain profile
- `/maps/get-suggestions` - Address autocomplete (ORS)
- `/maps/get-coordinates` - Get coordinates for address (ORS)
- `/maps/get-distance-time` - Get distance/time between two points (ORS)
- `/rides/create` - Create a new ride
- `/rides/get-fare` - Get fare estimate
- `/rides/start` - Start ride (OTP verification)
- `/rides/end` - End ride

---

## Real-Time Events (Socket.IO)

- `join` - Register socket for user/captain
- `update-location-captain` - Captain sends location updates
- `new-ride` - Server notifies captains of new ride requests
- `ride-confirmed` - Server notifies user when captain accepts
- `ride-started` - Server notifies user/captain when ride starts
- `ride-ended` - Server notifies user/captain when ride ends

---

## Live Location Tracking

- Uses browser geolocation API.
- Map is rendered with Leaflet.js (`react-leaflet`).
- Location updates every 10 seconds and recenters map.

---

## Environment Variables

### **Backend/.env**
```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
ORS_API_KEY=<your-openrouteservice-api-key>
```

### **Frontend/.env**
```
VITE_BASE_URL=http://localhost:3000
```

---

## Notes

- Make sure MongoDB is running and accessible.
- You need a valid OpenRouteService API key for geocoding and routing.
- For production, set up HTTPS and secure your secrets.
- You can customize map styles and icons in `frontend/public/images/`.

---

## License

MIT

---

## Credits

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Leaflet.js](https://leafletjs.com/)
- [OpenRouteService](https://openrouteservice.org/)
