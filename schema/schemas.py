def individual_serializer(todo) -> dict:
    return {
        "id": str(todo["_id"]),
        "name": str(todo["name"]),
        "complete": bool(todo["complete"])
    }

def list_serial(todos) -> list:
    return [individual_serializer(todo) for todo in todos]