<script lang="ts">
	import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte";
	import ChevronUp from "carbon-icons-svelte/lib/ChevronUp.svelte";
	import { slide } from "svelte/transition";
	$: topArray = ['/images/AIPPM.jpg', '/images/CCC.jpg'];
	$: current = '/images/DISEC.jpg';
	$: bottomArray = ['/images/HRC.jpg', '/images/UNSC.jpg'];

	function moveUp() {
		topArray.push(current)
		current = bottomArray[0]
		bottomArray.shift()
		bottomArray = bottomArray
		topArray = topArray
	}
	function moveDown() {
		bottomArray.unshift(current)
		current = topArray[topArray.length - 1]
		topArray.pop()
		bottomArray = bottomArray
		topArray = topArray
	}
</script>

<div class="flex h-full w-full items-center justify-center">
	{#key topArray}
		{#each topArray as topPic, i}
			<img
				src={topPic}
				alt=""
				transition:slide
				class="absolute w-2/5 rounded-lg border-2 border-gray-500 topImage"
				style="--margin:{(topArray.length - i)*3}rem; --scale:{0.9 - (topArray.length - i - 1)*0.15}"
			/>
		{/each}
	{/key}
	{#key bottomArray}
		{#each bottomArray as bottomPic, i}
			<img
				src={bottomPic}
				alt=""
				transition:slide
				class="absolute w-2/5 rounded-lg border-2 border-gray-500 bottomImage"
				style="--margin:{(i + 1)*3}rem; --scale:{0.9 - (i)*0.15}; --z:{5 - i}"
			/>
		{/each}
	{/key}
	<img
		src={current}
		alt=""
		transition:slide
		class="absolute w-2/5 rounded-lg border-2 border-black transition-all hover:border-white z-10"
	/>
</div>
<div class="flex flex-col text-black/50 gap-8 transition-all">
	<ChevronUp size={24} class="hover:text-black" onclick={moveUp} />
	<ChevronDown size={24} class="hover:text-black" onclick={moveDown} />
</div>


<style>
	.topImage {
		margin-bottom: var(--margin);
		transform: scale(var(--scale), 1)
	}
	.bottomImage {
		margin-top: var(--margin);
		transform: scale(var(--scale), 1);
		z-index: var(--z);
	}
</style>