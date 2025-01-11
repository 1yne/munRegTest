import { writable } from 'svelte/store';

export const navigateStore = writable({
  navigating: false,
  navigateTo: ''
});