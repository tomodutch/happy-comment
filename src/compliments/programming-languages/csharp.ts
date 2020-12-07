import { ComplimentGenerator } from "../../utils";
import * as random from '../random';

export const csharpCompliments: ComplimentGenerator[] = [
    () => `Your ${random.element(objects)} is ${random.descriptor()}`,
];

const objects = [
    'csharp',
    'usage of dotnet'
];