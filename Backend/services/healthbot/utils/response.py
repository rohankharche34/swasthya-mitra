def build_response(symptoms, rules, emergency_list):
    for s in symptoms:
        if s in emergency_list:
            return {
                "level": "EMERGENCY",
                "message": "This could be serious. Please seek emergency medical care immediately."
            }

    responses = []
    for s in symptoms:
        rule = rules.get(s)
        if rule:
            responses.append(
                f"For {s}: {rule['advice']} See a doctor if it lasts more than {rule['doctor_after_days']} days."
            )

    if not responses:
        return {
            "level": "UNKNOWN",
            "message": "I couldn't identify specific symptoms. Please consult a healthcare professional."
        }

    return {
        "level": "GENERAL",
        "message": " ".join(responses)
    }
