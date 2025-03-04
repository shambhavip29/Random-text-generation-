// Random Text Generator in JavaScript

class RandomTextGenerator {
    constructor() {
        this.words = [
            "amazing", "random", "text", "generator", "JavaScript", "repository",
            "coding", "developer", "opensource", "programming", "web", "framework",
            "library", "project", "software", "technology", "automation", "innovation"
        ];
    }

    generateRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }

    generateSentence(wordCount = 5) {
        let sentence = [];
        for (let i = 0; i < wordCount; i++) {
            sentence.push(this.generateRandomWord());
        }
        return sentence.join(" ") + ".";
    }

    generateParagraph(sentenceCount = 3, wordsPerSentence = 5) {
        let paragraph = [];
        for (let i = 0; i < sentenceCount; i++) {
            paragraph.push(this.generateSentence(wordsPerSentence));
        }
        return paragraph.join(" ");
    }
}

// Example Usage
const generator = new RandomTextGenerator();
console.log(generator.generateSentence()); // Outputs a random sentence
console.log(generator.generateParagraph()); // Outputs a random paragraph
