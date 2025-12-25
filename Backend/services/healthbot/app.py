from fastapi import FastAPI
import json
from utils.parser import extract_symptoms
from utils.response import build_response

app = FastAPI()

with open("rules/symptoms.json") as f:
    rules = json.load(f)

with open("rules/emergencies.json") as f:
    emergencies = json.load(f)

@app.post("/chat")
def chat(user_input: str):
    symptoms = extract_symptoms(user_input, rules.keys())
    return build_response(symptoms, rules, emergencies)
