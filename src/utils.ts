export interface ComplimentGeneratorArgs {
    languageId: string
}

export type ComplimentGenerator = (args: ComplimentGeneratorArgs) => string;