<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let { text } = $props();

	let splitText = text.split('');
	let delay = text == 'RoMUN' ? 1000 : 1500;
	let animate = $state(false);

	onMount(() => {
		animate = true;
	});
</script>

<div>
	{#each splitText as textChar, i}
		{#if animate}
			<span
				in:fly|global={{ y: 100, duration: 500, delay: delay + i * 100 }}
				out:fly|global={{ y: -100, duration: 500, delay: i * 50 }}
				class={`inline-block font-mortend text-[15vw] leading-none ${text == 'RoMUN' ? 'main' : 'side'}`}
				>{textChar}</span
			>
		{/if}
	{/each}
</div>
