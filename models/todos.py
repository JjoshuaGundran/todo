from pydantic import BaseModel

class Todo(BaseModel):
    name: str
    complete: bool