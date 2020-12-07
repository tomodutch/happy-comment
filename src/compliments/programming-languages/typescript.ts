import { ComplimentGenerator } from "../../utils";
import * as random from '../random';

export const typescriptCompliments: ComplimentGenerator[] = [
    () => `Your ${random.element(objects)} is ${random.descriptor()}`,
    () => `Your ${random.element(pluralObjects)} are ${random.descriptor()}`
];

const pluralObjects = [
    'type definitions'
];

const objects = [
    'typescript',
];