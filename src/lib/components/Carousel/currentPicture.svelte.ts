import { writable } from "svelte/store";

export const currentPictureState = writable({
	imageLink: '/images/DISEC.jpg',
	name: 'DISEC',
	full: 'Disarmament and International Security Meet'
})