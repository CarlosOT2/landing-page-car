//# Types //
import type { StructureLn } from '../types/ln'
//# Libs //
import yaml from 'js-yaml';

export default async function loadLocale(lang: string): Promise<StructureLn> {
    const res = await fetch(`/ln/${lang}.yaml`);
    const text = await res.text();
    return yaml.load(text) as StructureLn
}