<script lang="ts">
	$: topArray = ['/images/AIPPM.jpg', '/images/CCC.jpg'];
	$: current = '/images/DISEC.jpg';
	$: bottomArray = ['/images/HRC.jpg', '/images/UNSC.jpg'];
</script>

<div class="flex h-full w-full items-center justify-center">
	{#each topArray as topPic, i}
		<img
			src={topPic}
			alt=""
			class="absolute w-2/5 rounded-lg border-2 border-gray-500 topImage"
			style="--margin:{(topArray.length - i)*3}rem; --scale:{0.9 - (topArray.length - i - 1)*0.15}"
		/>
	{/each}
	{#each bottomArray as bottomPic, i}
		<img
			src={bottomPic}
			alt=""
			class="absolute w-2/5 rounded-lg border-2 border-gray-500 bottomImage"
			style="--margin:{(i + 1)*3}rem; --scale:{0.9 - (i)*0.15}; --z:{5 - i}"
		/>
	{/each}
	<img
		src={current}
		alt=""
		class="absolute w-2/5 rounded-lg border-2 border-black transition-all hover:border-white z-10"
	/>
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