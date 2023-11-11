from openai import OpenAI
from dotenv import load_dotenv
from io import BytesIO
import os

load_dotenv()
client = OpenAI()

# Function to generate an image using OpenAI's API
def create_image(prompt):
    try:
        response = client.images.generate(
            model="dall-e-2",
            prompt=prompt,
            n=1,
            size="1024x1024"
        )
        print(response.data[0].url)
    except client.error.OpenAIError as e:
        print(e.http_status)
        print(e.error)

# Usage
prompt = "a painting of a cat"
create_image(prompt)
