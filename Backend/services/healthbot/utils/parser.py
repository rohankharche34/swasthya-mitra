def extract_symptoms(text, known_symptoms):
    text = text.lower()
    found = []

    for symptom in known_symptoms:
        if symptom in text:
            found.append(symptom)

    return found