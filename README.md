#Titanic Survival Predictor
A modern web application built with Flask and a scikit-learn machine learning model to predict passenger survival chances on the Titanic. This project demonstrates a full end-to-end data science workflow, from data cleaning and model training to deployment in a responsive and interactive web interface.

#Features
Interactive Prediction Form: A user-friendly form to input passenger details.

Real-time Validation: The form provides instant feedback and only enables the "Predict" button when all fields are valid.

ML-Powered Results: Utilizes a trained Logistic Regression model to predict a binary outcome (Survived/Not Survived).

Dynamic UI/UX: A modern, responsive frontend with animated backgrounds, glassmorphism effects, and interactive elements.

Separation of Concerns: The project is cleanly structured into a model training environment and a separate Flask application for deployment.

#Technology Stack
Backend: Python, Flask

Machine Learning: Scikit-learn, Pandas, NumPy

Frontend: HTML, CSS, JavaScript

Development: Jupyter Notebook, Git & GitHub

#Project Structure
The repository is organized into two main parts: the model training environment and the Flask application.

Titanic_main/
├── .gitignore
├── requirements.txt
├── model_training/
│   ├── dataset.csv
│   ├── model_train.ipynb
│   └── trained_model.pkl   (The final model output)
│
└── titanic_app/
    ├── app.py              (The main Flask application)
    ├── trained_model.pkl   (A copy of the trained model for deployment)
    ├── static/
    │   ├── style.css
    │   ├── script.js
    │   └── predict.js
    └── templates/
        ├── index.html
        ├── predict.html
        └── result.html
#Setup and Installation
To run this project on your local machine, follow these steps:

Clone the repository:

Bash

git clone https://github.com/Karthik-3494/Titanic_survival_predictor.git
cd Titanic_main
Navigate to the Flask app directory:

Bash

cd titanic_app
Create and activate a virtual environment:

On Windows:

Bash

python -m venv .venv
.\.venv\Scripts\Activate
On macOS/Linux:

Bash

python3 -m venv .venv
source .venv/bin/activate
Install the required dependencies:

Bash

pip install -r ../requirements.txt
Run the Flask application:

Bash

python app.py
Access the application:
Open your web browser and go to http://127.0.0.1:5000.

#Usage
Once the application is running, you will see the landing page.

Click the "Get Started" button.

You will be redirected to a form. Fill in all the passenger details.

The "Predict Survival" button will become clickable once all fields are valid.

Click the button to submit the data to the model.

The next page will display the prediction result: a clear "YES" or "NO".

Click "Try Again" to return to the form page.

#Model Training
The machine learning model is a Logistic Regression classifier trained on the well-known Titanic dataset. The complete process of data cleaning, feature engineering, model training, and evaluation is documented in the Jupyter Notebook located at:

model_training/model_train.ipynb
