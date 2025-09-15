from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app=Flask(__name__)
with open('trained_model.pkl','rb') as f:
    model=pickle.load(f)

@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/predict")
def predict_page():
    return render_template("predict.html")

@app.route("/result", methods=['POST'])
def result_page():
    try:
        ticket_class =0
        gender = 0
        if request.form['ticket_class']=="1st Class":
            ticket_class =1
        elif request.form['ticket_class']=="2nd Class":
            ticket_class =2
        elif request.form['ticket_class']=="3rd Class":
            ticket_class =3

        if request.form['gender']=="Male":
            gender=1
        elif request.form['gender']=="Female":
            gender=0

        age=float(request.form['age'])
        siblings_spouses=int(request.form['siblings_spouses'])
        parents_children=int(request.form['parents_children'])
        fare=float(request.form['fare'])
        input_data = np.array([[ticket_class, gender, age, siblings_spouses, parents_children, fare]])
        prediction = model.predict(input_data)
        return render_template("result.html", prediction=prediction)
    except KeyError:
        return jsonify({"error": "Invalid input."}), 400


if __name__=="__main__":
    app.run(debug=True)

