import { adjectives } from "./adjectives";
import { adverbs } from "./adverbs";
import * as Appendix from "./appendix";
import { gerunds } from "./gerunds";
import * as Groups from "./groups";
import { properties } from "./properties";

export const number = (max: number) => Math.ceil(Math.random() * max);
export const element = (items: any[]) => items[number(items.length) - 1];
export const descriptor = () => {
    if (number(2) === 2) {
        return `${adverb()} ${adjective()}`;
    }

    return adjective();
};

export const adverb = () => element(adverbs);
export const adjective = () => element(adjectives);
export const property = () => element(properties);
export const appendix = () => element(Appendix.appendix);
export const gerund = () => element(gerunds);
export const groups = () => element(Groups.peoplePlural);
export const group = () => element(Groups.peopleSingular);
export const joinable = () => element(Groups.joinable);