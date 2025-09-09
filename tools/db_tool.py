# tools/db_tool.py
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Get the connection string from your environment variables
MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = "paurya_db"

# A single, reusable client instance
client = None

def get_db_client():
    """Initializes and returns a MongoDB client, reusing the connection."""
    global client
    if client is None:
        try:
            client = MongoClient(MONGO_URI, server_api=ServerApi('1'))
            client.admin.command('ping') # Confirm a successful connection
            print("Successfully connected to MongoDB Atlas!")
        except Exception as e:
            print(f"ERROR: Could not connect to MongoDB: {e}")
            client = None
    return client

def create_test_document():
    """
    Connects to the database and creates a simple test document.
    This function will be our first 'tool'.
    """
    db_client = get_db_client()
    if db_client is None:
        return "Failed to connect to the database."

    try:
        db = db_client[DB_NAME]
        collection = db["tests"]
        test_doc = {
            'message': 'Hello from db tool',
            'status': 'success'
        }
        result = collection.insert_one(test_doc)
        
        success_message = f"Successfully created test document with ID: {result.inserted_id}"
        print(f"{success_message}")
        return success_message
    except Exception as e:
        error_message = f"Error creating document: {e}"
        print(f"{error_message}")
        return error_message

# This block allows us to run and test this file directly
if __name__ == '__main__':
    create_test_document()