# Random-text-generation-

A simple JavaScript-based random text generator that creates sentences and paragraphs using predefined words. Useful for generating placeholder text for testing and development purposes.

## Features
- Generate random words, sentences, and paragraphs
- Customizable sentence and paragraph length
- Easy-to-use class-based implementation

## Installation
Clone the repository and navigate to the project folder:
```sh
git clone https://github.com/yourusername/random-text-generator.git
cd random-text-generator
```

## Usage
Include the script in your project or use it in a Node.js environment.

### Example Code
```js
const generator = new RandomTextGenerator();
console.log(generator.generateSentence()); // Outputs a random sentence
console.log(generator.generateParagraph()); // Outputs a random paragraph
```

## Methods
### `generateRandomWord()`
Returns a single random word from the predefined list.

### `generateSentence(wordCount = 5)`
Generates a random sentence with the specified number of words (default: 5).

### `generateParagraph(sentenceCount = 3, wordsPerSentence = 5)`
Generates a random paragraph with the specified number of sentences and words per sentence (default: 3 sentences, 5 words each).

## Contributing
Feel free to contribute by submitting a pull request or opening an issue!

## License
This project is licensed under the MIT License.
