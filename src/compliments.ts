import { randomElement } from "./utils";

const templates = [
    () => `Your ${randomProperty()} is ${randomDescriptor()}.`,
    () => "You are making a difference.",
    () => "You're more helpful than you think.",
    () => "You should be thanked more often. Thank you.",
    () => "Our community is better because you're in it.",
    () => "Any team would be lucky to have you on it.",
    () => "On a scale from 1 to 10, you're an 11.",
    () => `You're ${randomDescriptor()}.`,
    () => `Your colleagues think you are ${randomDescriptor()}.`,
];

const properties = [
    'style',
    'skill',
    'intelligence',
    'code',
    'perspective'
];

const adjectives = [
    'praiseworthy',
    'admirable',
    'awe-inspiring',
    'great',
    'inspirational',
    'magnificent',
    'marvellous',
    'out of this world',
    'outstanding',
    'awesome',
    'refreshing',
    'the best',
    'nice',
    'lovely',
    'extraordinary',
    'kind'
];

const adverbs = [
    'honestly',
    'always',
    'absolutely',
    'totally',
    'extremely'
];

const appendix = [
    'You deserve a hug.',
    'Thank you',
    'I appreciate you.',
    'Keep up the good work'
];

function randomDescriptor() {
    return `${randomAdverb()} ${randomAjective()}`;
}

function randomAdverb() {
    return randomElement(adverbs);
}

function randomAjective() {
    return randomElement(adjectives);
}

function randomProperty() {
    return randomElement(properties);
}

function randomAppendix() {
    return randomElement(appendix);
}

export function getCompliment() {
    const i = Math.floor(Math.random() * 11);
    const append = i >= 8 ? randomAppendix() : '';
    return `${randomElement(templates)()} ${append}`.trim();
}