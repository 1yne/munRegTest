import { writable } from 'svelte/store';

export const store = writable({
	searchActive: false
});
