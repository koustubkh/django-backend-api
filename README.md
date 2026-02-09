# Django Backend API

A simple backend REST API built using Django and Django REST Framework.  
This project is created as a **full-stack mini project backend** for learning and demonstration purposes.

---------------------------------------------------------------------------------------------------------

## Tech Stack
1.Python 3
2.Django
3.Django REST Framework
4.SQLite (default database)

---------------------------------------------------------------------------------------------------------

## Project Structure

django-backend-api/
│
├── backed/
│ └── myproject/
│ ├── myproject/
│ │ ├── settings.py
│ │ ├── urls.py
│ │ ├── asgi.py
│ │ └── wsgi.py
│ └── manage.py
│
├── requirements.txt
├── .gitignore
└── README.md

---------------------------------------------------------------------------------------------------------

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/koustubkh/django-backend-api.git
cd django-backend-api

### 2. Create virtual environment
```bash
python -m venv venv
venv\Scripts\activate   # Windows

### 3. Install dependencies
```bash
pip install -r requirements.txt

### 4. Run migrations
```bash
python manage.py migrate

### 5. Start the server
```bash
python manage.py runserver
