// src/js/engine.js

const dictionaries = {
    lorem: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'curabitur', 'ac', 'urna'],
    tech: ['interface', 'endpoint', 'scalability', 'react', 'tailwind', 'microservice', 'deployment', 'serverless', 'agile', 'frontend', 'backend', 'syntax'],
    marketing: ['unlock', 'exclusive', 'growth', 'solutions', 'revenue', 'optimize', 'engagement', 'conversion', 'streamline', 'leverage', 'value']
};

export function generateGhostText({
    paragraphCount = 1,
    wordCountPerSentence = 12,
    style = 'lorem',
    format = 'text',
}) {
    const vocab = dictionaries[style] || dictionaries.lorem;
    const sentencesPerParagraph = 4;

    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const generateSentence = (length) => {
        const sentence = Array.from({ length }).map(() => rand(vocab)).join(' ');
        return `${sentence.charAt(0).toUpperCase() + sentence.slice(1)}.`;
    };

    const paragraphs = Array.from({ length: paragraphCount }).map((_, i) => {
        const sentences = Array.from({ length: sentencesPerParagraph }).map(() => generateSentence(wordCountPerSentence));
        if (i === 0 && style === 'lorem') {
            sentences[0] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        }
        return sentences.join(' ');
    });

    if (format === 'html') {
        return paragraphs.map(p => `<p>${p}</p>`).join('\n\n');
    }

    if (format === 'json') {
        return JSON.stringify({
            status: "success",
            style,
            meta: { paragraphs: paragraphCount, words_per_sentence: wordCountPerSentence },
            data: paragraphs
        }, null, 4);
    }

    return paragraphs.join('\n\n');
}