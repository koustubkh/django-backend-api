Full Stack Facts Application
Project Overview

This project is a simple full-stack web application developed as part of the Beni Technical Assessment.
The application demonstrates frontend–backend integration using Django (backend) and React (frontend), along with REST API communication and deployment readiness.

The backend exposes a REST API that returns a list of hardcoded facts in JSON format, and the frontend consumes this API to display the facts in a user-friendly interface.

Technologies Used
Backend

Python

Django

Django REST Framework

SQLite (default for development)

Frontend

React

JavaScript

HTML

CSS

Tools & Platforms

Git & GitHub

REST APIs

Browser Fetch API

Project Structure
project-root/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   └── django project files
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── React application files
│
└── README.md

Backend Details

The backend was developed using Django to create a REST API endpoint.

API Endpoint
GET /api/facts/

Sample Response
[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100°C." },
  { "id": 3, "fact": "Earth has one moon." }
]

Backend Features

REST API returning JSON data

CORS configured to allow frontend access

Simple and clean API structure

Ready for cloud deployment

Frontend Details

The frontend was developed using React.

Frontend Features

Fetches data from the backend API

Displays facts dynamically

Uses React hooks (useEffect, useState)

Clean and minimal UI

Handles API loading and error states

How I Developed This Application
Backend Development

I created the backend using Django and Django REST Framework.
A REST API endpoint was implemented to return a hardcoded list of facts in JSON format.
CORS was configured to allow communication between the frontend and backend.
The backend was tested locally to ensure correct API responses before integration.

Frontend Development

I developed the frontend using React.
The application fetches data from the backend API using HTTP GET requests.
React hooks were used to manage state and lifecycle events.
Basic styling was applied to present the data clearly and neatly.

What I Learned From This Exercise

Through this project, I gained hands-on experience in building a full-stack web application.
I learned how to:

Create REST APIs using Django

Connect a React frontend with a backend API

Handle CORS issues between frontend and backend

Structure a full-stack project professionally

Use Git and GitHub for version control

Prepare applications for cloud deployment

This exercise helped me understand real-world frontend–backend interaction and improved my confidence in full-stack development.

How to Run the Project Locally
Backend
cd backend
pip install -r requirements.txt
python manage.py runserver

Frontend
cd frontend
npm install
npm run dev

Submission Details

GitHub Repository: Public repository containing frontend and backend code

Live Frontend URL: Provided in submission email

Backend API URL: Provided in submission email

Author

Koustubh Hungund
