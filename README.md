EduStreak

EduStreak is a web application built to track your learning streaks and motivate users to keep up
with their study habits. It includes features like user authentication, a streak tracker, and a user-friendly dashboard to display 
your progress.

Table of Contents->
1.Introduction
2.Approach to Development
3.Technologies Used
4.Installation
5.Usage
6.Features
7.License

Introduction->
EduStreak is a MERN stack application that allows users to register, log in, and track their
daily learning streaks. The main objective of the app is to encourage users to stay consistent with their learning activities by showing a
visual representation of their progress.

Key Features->
1.User registration and login using JWT-based authentication.
2.Streak tracking based on user’s daily activity.
3.Dashboard to view learning streaks.
4.Fully responsive UI with modern design.

Approach to Development->

1.Frontend:
    The frontend is built using React.js for a dynamic user interface.
    React Router is used to handle navigation between pages (e.g., Login, Register, Dashboard).
    TailwindCSS is used for styling the app with a modern and responsive design.
    API calls are made using axios to interact with the backend.

2.Backend->
    The backend is built with Node.js using Express.js.
    MongoDB is used to store user data (user profiles, streak information, etc.).
    JWT (JSON Web Token) is used for user authentication.
    Custom middlewares handle errors and authentication.
    The streak tracking logic is implemented in the backend, and the streak is updated based on the user's activity.

3.Authentication->
   The app uses JWT for secure authentication.
   The user’s activity (login) is tracked, and their streak is updated when they log in each day.

Technologies Used->
 1.Frontend: React.js, TailwindCSS, React Router, Axios
 2.Backend: Node.js, Express.js, MongoDB, JWT, bcrypt
 3.Database: MongoDB (via Mongoose)
 4.Authentication: JWT (JSON Web Token)

Installation->
Step 1: Clone the repository
Clone the repository to your local machine:
  git clone https://github.com/dharmendra4522/EduStreak.git
  cd EduStreak

Step 2: Install Backend Dependencies
Navigate to the backend directory and install the necessary dependencies:
   cd backend
   npm install

Step 3: Install Frontend Dependencies
Now, navigate to the frontend directory and install the required dependencies:
  cd ../frontend
  npm install

Step 4: Setup Environment Variables
To connect the application with MongoDB and set up authentication, you'll need to add environment variables.

1.In the backend folder, create a .env file and add your MongoDB URI and JWT Secret:
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret

Step 5: Run the Application
To run both the frontend and backend servers concurrently, run the following command from the root of your project:
   npm start

This will start the backend and frontend servers, and you can access the app at http://localhost:3000 in your browser.
    Frontend: Running at http://localhost:3000
    Backend: Running at http://localhost:5000 (by default, or whatever port you configured)

Usage->
  1.Login: After navigating to the application, you can log in using the credentials you registered with.
  2.Dashboard: Once logged in, you can view your streak progress on the dashboard.
  3.Streak Tracking: The streak tracker will automatically update the streak count when you log in each day.

Example Flow:
  Login: User logs in with their email and password.
  Streak Update: When a user logs in, the system checks if the user has already logged in today. If not, it increases their streak by 1. If the user already logged in today, the streak is not updated.
  Dashboard View: After logging in, the user will be redirected to the dashboard where their streak is displayed.

Features
  User Authentication: Secure login and registration using JWT-based authentication.
  Streak Tracker: The application tracks the number of consecutive days a user has logged in, creating a "streak."
  Responsive UI: The app is fully responsive, providing an optimal experience on both mobile and desktop devices.
  Error Handling: Detailed error handling for login failure, registration failure, and backend errors.
  User Experience: Easy-to-use interface with proper error messages and alerts to guide the user.












