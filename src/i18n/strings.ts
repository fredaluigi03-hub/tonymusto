import { useLang, type Lang } from './LanguageContext';

/**
 * Every translation file is `defineStrings({ it: {...}, en: {...}, ... })`.
 * Italian is the reference: the other languages must match its shape exactly,
 * so a missing key is a type error rather than a blank on the page.
 */
export const defineStrings = <T,>(strings: { it: T } & Record<Exclude<Lang, 'it'>, T>) => strings;

export const useStrings = <T,>(strings: Record<Lang, T>): T => strings[useLang().lang];
