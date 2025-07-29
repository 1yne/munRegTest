import { writable } from "svelte/store";

export const currentPictureState = writable({
	link: '/images/DISEC.jpg',
	name: 'DISEC',
	full: 'Disarmament and International Security Meet'
})