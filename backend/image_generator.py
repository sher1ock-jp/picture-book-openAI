```python
import os
from PIL import Image, ImageDraw, ImageFont
from openai_api import generate_text

class ImageGenerator:
    def __init__(self, width=800, height=600, background_color=(255, 255, 255)):
        """
        Initialize the image generator.
        :param width: The width of the image.
        :param height: The height of the image.
        :param background_color: The background color of the image.
        """
        self.width = width
        self.height = height
        self.background_color = background_color
        self.image = Image.new('RGB', (self.width, self.height), self.background_color)
        self.draw = ImageDraw.Draw(self.image)

    def add_text(self, text, position, font_size=20, text_color=(0, 0, 0)):
        """
        Add text to the image.
        :param text: The text to add.
        :param position: The position to add the text.
        :param font_size: The font size of the text.
        :param text_color: The color of the text.
        """
        font = ImageFont.truetype('arial.ttf', font_size)
        self.draw.text(position, text, fill=text_color, font=font)

    def save(self, filename):
        """
        Save the image to a file.
        :param filename: The name of the file to save the image.
        """
        self.image.save(filename)

def generate_image_from_text(prompt, filename):
    """
    Generate an image from a text prompt using OpenAI's GPT-3 model.
    :param prompt: The initial text to start the generation from.
    :param filename: The name of the file to save the image.
    """
    text = generate_text(prompt)
    image_generator = ImageGenerator()
    image_generator.add_text(text, position=(50, 50))
    image_generator.save(filename)
```
