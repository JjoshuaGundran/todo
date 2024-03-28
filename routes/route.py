from fastapi import APIRouter
from models.todos import Todo
from config.database import collection_name
from schema.schemas import list_serial, individual_serializer
from bson import ObjectId

router = APIRouter()

#GET request method
@router.get("/todos")
async def get_todos():
    todos = list_serial(collection_name.find())
    return todos

#POST request method
@router.post("/todos")
async def post_todos(todo: Todo):
    collection_name.insert_one(dict(todo))

#GET request method
@router.get("/todos/{id}")
async def get_todo(id: str):
    todo = individual_serializer(collection_name.find_one({"_id": ObjectId(id)}))
    return todo

#PUT request method
@router.put("/todos/{id}")
async def put_todos(id: str, todo: Todo):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(todo)})

#DELETE request method
@router.delete("/todos/{id}")
async def delete_todos(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})