```python
from pymongo import MongoClient

class Database:
    def __init__(self, config):
        self.client = MongoClient(host=config['host'], port=config['port'], username=config['username'], password=config['password'])
        self.db = self.client[config['database_name']]
        self.collection = self.db['picture_books']

    def save_picture_book(self, text, image):
        book = {
            'text': text,
            'image': image
        }
        result = self.collection.insert_one(book)
        return str(result.inserted_id)

    def get_picture_book(self, book_id):
        book = self.collection.find_one({'_id': book_id})
        if book is not None:
            book['_id'] = str(book['_id'])
        return book
```
