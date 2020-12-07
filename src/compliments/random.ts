import { adjectives } from "./adjectives";
import { adverbs } from "./adverbs";
import * as Appendix from "./appendix";
import { properties } from "./properties";

// https://stackoverflow.com/a/5915122
export const element = (items: any[]) => items[Math.floor(Math.random() * items.length)];
export const descriptor = () => `${adverb()} ${adjective()}`;
export const adverb = () => element(adverbs);
export const adjective = () => element(adjectives);
export const property = () => element(properties);
export const appendix = () => element(Appendix.appendix);
export const gerund = () => element(gerunds);