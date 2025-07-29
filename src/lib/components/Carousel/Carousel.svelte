<script lang="ts">
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';
	import { fly } from 'svelte/transition';
	import { currentPictureState } from './currentPicture.svelte';

	let topArray = $state([
		{
			link: '/images/AIPPM.jpg',
			name: 'AIPPM',
			full: 'All India Political Party Meet'
		},
		{
			link: '/images/CCC.jpg',
			name: 'CCC',
			full: 'Continous Crisis Committee'
		}
	]);
	let bottomArray = $state([
		{
			link: '/images/HRC.jpg',
			name: 'HRC',
			full: 'Human Rights Council'
		},
		{
			link: '/images/UNSC.jpg',
			name: 'UNSC',
			full: 'United Nations Security Council'
		}
	]);

	function moveUp() {
		if (bottomArray.length != 0) {
			topArray.push($currentPictureState);
			$currentPictureState = bottomArray[0];
			bottomArray.shift();
			bottomArray = bottomArray;
			topArray = topArray;
		}
	}
	function moveDown() {
		if (topArray.length != 0) {
			bottomArray.unshift($currentPictureState);
			$currentPictureState = topArray[topArray.length - 1]
			topArray.pop();
			bottomArray = bottomArray;
			topArray = topArray;
		}
	}
</script>

<div class="flex h-full w-full items-center justify-center">
	{#each topArray as topPic, i}
		<img
			src={topPic.link}
			alt={topPic.name}
			transition:fly
			class="topImage absolute w-2/5 rounded-lg border-2 border-gray-500"
			style="--margin:{(topArray.length - i) * 3}rem; --scale:{0.9 -
				(topArray.length - i - 1) * 0.15}"
		/>
	{/each}
	{#each bottomArray as bottomPic, i}
		<img
			src={bottomPic.link}
			alt={bottomPic.name}
			transition:fly
			class="bottomImage absolute w-2/5 rounded-lg border-2 border-gray-500"
			style="--margin:{(i + 1) * 3}rem; --scale:{0.9 - i * 0.15}; --z:{5 - i}"
		/>
	{/each}
	<img
		src={$currentPictureState.link}
		alt={$currentPictureState.name}
		transition:fly
		class="absolute z-10 w-2/5 rounded-lg border-2 border-black transition-all hover:border-white"
	/>
</div>
<div class="flex flex-col gap-8 text-black/50 transition-all">
	<ChevronUp size={24} class="hover:text-black" onclick={moveDown} />
	<ChevronDown size={24} class="hover:text-black" onclick={moveUp} />
</div>

<style>
	.topImage {
		margin-bottom: var(--margin);
		transform: scale(var(--scale), 1);
	}
	.bottomImage {
		margin-top: var(--margin);
		transform: scale(var(--scale), 1);
		z-index: var(--z);
	}
</style>
