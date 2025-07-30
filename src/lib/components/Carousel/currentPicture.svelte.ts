import { writable } from 'svelte/store';

export const currentPictureState = writable({
	imageLink: '/images/DISEC.jpg',
	name: 'DISEC',
	full: 'Disarmament and International Security Meet',
	link: '/committees/disec'
});

export const topArrayState = writable([
	{
		imageLink: '/images/AIPPM.jpg',
		name: 'AIPPM',
		full: 'All India Political Party Meet',
		link: '/committees/aippm'
	},
	{
		imageLink: '/images/CCC.jpg',
		name: 'CCC',
		full: 'Continous Crisis Committee',
		link: '/committees/ccc'
	}
]);

export const bottomArrayState = writable([
	{
		imageLink: '/images/HRC.jpg',
		name: 'HRC',
		full: 'Human Rights Council',
		link: '/committees/hrc'
	},
	{
		imageLink: '/images/UNSC.jpg',
		name: 'UNSC',
		full: 'United Nations Security Council',
		link: '/committees/unsc'
	}
]);
