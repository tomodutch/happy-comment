import * as programmingLanguages from './programming-languages';
import * as tools from './tools';
import * as random from './random';
import { ComplimentGenerator, ComplimentGeneratorArgs } from '../utils';

const templates: ComplimentGenerator[] = [
    () => `Your ${random.property()} is ${random.descriptor()}.`,
    () => "You are making a difference.",
    () => `You're more ${random.adjective()} than you think.`,
    () => "You should be thanked more often. Thank you.",
    () => `Our ${random.joinable()} is better because you're in it.`,
    () => "Any team would be lucky to have you on it.",
    () => "On a scale from 1 to 10, you're an 11.",
    () => `You're ${random.descriptor()}.`,
    () => `Your ${random.groups()} think you are ${random.descriptor()}.`,
    () => `Your ${random.group()} thinks you are ${random.descriptor()}.`,
    () => `You're great at ${random.gerund()}.`,
    () => 'Your program works also on MY machine!',
    () => random.appendix()
];

const mapping: Record<string, ComplimentGenerator[]> = {
    typescriptreact: [
        ...programmingLanguages.typescriptCompliments,
        ...tools.reactCompliments
    ],
    csharp: [
        ...programmingLanguages.csharpCompliments
    ]
};

export function getCompliment(args: ComplimentGeneratorArgs) {
    const i = Math.floor(Math.random() * 11);
    const append = i >= 8 ? random.appendix() : '';
    const generators = [...mapping[args.languageId] || [], ...templates];
    const generator = random.element(generators);
    return `${generator(args)} ${append}`.trim();
}