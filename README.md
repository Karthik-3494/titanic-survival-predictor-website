
# Titanic Survival Predictor

A modern web application built with **Flask** and a **scikit-learn** machine learning model to predict passenger survival chances on the Titanic.  
This project demonstrates a full end-to-end data science workflow, from data cleaning and model training to deployment in a responsive and interactive web interface.

---

## Features

- **Interactive Prediction Form** – User-friendly form to input passenger details  
- **Real-time Validation** – Instant feedback with enabled "Predict" button only when inputs are valid  
- **ML-Powered Results** – Trained Logistic Regression model predicts survival outcome (Survived / Not Survived)  
- **Dynamic UI/UX** – Modern, responsive frontend with animated backgrounds, glassmorphism, and interactivity  
- **Separation of Concerns** – Model training environment and Flask app are cleanly separated  

---

## Technology Stack

- **Backend:** Python, Flask  
- **Machine Learning:** Scikit-learn, Pandas, NumPy  
- **Frontend:** HTML, CSS, JavaScript  
- **Development:** Jupyter Notebook, Git & GitHub  

---

## Project Structure

```

Titanic\_main/
├── .gitignore
├── requirements.txt
├── model\_training/
│   ├── dataset.csv
│   ├── model\_train.ipynb
│   └── trained\_model.pkl   # Final model output
│
└── titanic\_app/
├── app.py              # Main Flask application
├── trained\_model.pkl   # Copy of the trained model for deployment
├── static/
│   ├── style.css
│   ├── script.js
│   └── predict.js
└── templates/
├── index.html
├── predict.html
└── result.html

````

---

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Karthik-3494/Titanic_survival_predictor.git
   cd Titanic_main


2. Navigate to the Flask app directory:

   ```sh
   cd titanic_app
   ```

3. Create and activate a virtual environment:

   * On Windows:

     ```sh
     python -m venv .venv
     .\.venv\Scripts\Activate
     ```
   * On macOS/Linux:

     ```sh
     python3 -m venv .venv
     source .venv/bin/activate
     ```

4. Install the required dependencies:

   ```sh
   pip install -r ../requirements.txt
   ```

5. Run the Flask application:

   ```sh
   python app.py
   ```

6. Access the application:
   Open your browser and go to `http://127.0.0.1:5000`.

---

## Usage

1. Start the application and open the landing page.
2. Click **"Get Started"** to open the prediction form.
3. Fill in all passenger details.
4. The **"Predict Survival"** button activates once all inputs are valid.
5. Submit the form to get the prediction result: **YES** or **NO**.
6. Use **"Try Again"** to go back to the form.

---

## Model Training

The machine learning model is a **Logistic Regression** classifier trained on the Titanic dataset.
The full workflow (data cleaning, feature engineering, training, evaluation) is documented in:

`model_training/model_train.ipynb`




