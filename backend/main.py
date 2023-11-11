```python
import json
from flask import Flask, request, jsonify
from openai_api import OpenAIAPI
from image_generator import ImageGenerator
from database import Database

# Load configuration
with open('config.json') as config_file:
    config = json.load(config_file)

# Initialize Flask app
app = Flask(__name__)

# Initialize OpenAI API
openai_api = OpenAIAPI(config['openai_api']['api_key'])

# Initialize Image Generator
image_generator = ImageGenerator()

# Initialize Database
database = Database(config['database'])

@app.route('/create', methods=['POST'])
def create_picture_book():
    data = request.get_json()

    # Generate text using OpenAI API
    text = openai_api.generate_text(data['prompt'])

    # Generate image using Image Generator
    image = image_generator.generate_image(text)

    # Save to database
    book_id = database.save_picture_book(text, image)

    return jsonify({'book_id': book_id}), 201

@app.route('/get/<book_id>', methods=['GET'])
def get_picture_book(book_id):
    # Retrieve from database
    book = database.get_picture_book(book_id)

    if book is None:
        return jsonify({'error': 'Book not found'}), 404

    return jsonify(book), 200

if __name__ == '__main__':
    app.run(host=config['server']['host'], port=config['server']['port'])
```
