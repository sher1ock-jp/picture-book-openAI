import json
import openai

# Load the configuration file
with open('config.json') as config_file:
    config = json.load(config_file)

# Get the OpenAI API key from the configuration file
openai.api_key = config['openai_api']['api_key']

def generate_text(prompt, max_tokens=100):
    """
    Function to generate text using OpenAI's GPT-3 model.
    :param prompt: The initial text to start the generation from.
    :param max_tokens: The maximum number of tokens to generate.
    :return: The generated text.
    """
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=max_tokens
    )
    return response.choices[0].text.strip()
