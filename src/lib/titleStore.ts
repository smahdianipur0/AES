
import { writable } from 'svelte/store';
type TitleType = string;
export const title = writable <TitleType>('Default Title'); 
