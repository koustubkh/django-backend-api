Full Stack Facts Application
1. How I developed this application
Backend

The backend of this application was developed using Django to create a REST API.
A simple API endpoint was implemented to return a hardcoded list of facts in JSON format.
The API follows REST principles and was tested locally to ensure correct responses.
CORS was configured to allow secure communication between the frontend and backend.
The backend code was structured to be simple, readable, and easy to maintain.

Frontend

The frontend of this application was developed using React.
A user interface was created to fetch data from the backend REST API using HTTP GET requests.
React hooks such as useEffect and useState were used to manage data fetching and application state.
The fetched facts are displayed in a clean and readable format with basic UI styling.
The frontend was tested to ensure it successfully communicates with the backend API.

2. What I learnt in this exercise

Through this exercise, I gained practical experience in building a full-stack web application.
I learned how to develop REST APIs using Django and connect them with a React frontend.
I understood how CORS works and how to resolve cross-origin issues between frontend and backend services.
I also learned how to structure frontend and backend code separately and prepare the application for deployment.
Overall, this project improved my understanding of full-stack development and real-world application workflows.

project-root/
 ├── backend/
 ├── frontend/
 └── README.md
