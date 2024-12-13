<script lang="ts">
	let { text } = $props();

	let splitText = text.split('');
	let delay = text == 'RoMUN' ? 1000 : 1500;
</script>

<div class="">
	{#each splitText as textChar, i}
		<span
			class={`splitText font-mortend text-[15vw] leading-none opacity-0 ${text == 'RoMUN' ? 'main' : 'side'}`}
			style={`animation-delay: ${delay + i * 100}ms`}>{textChar}</span
		>
	{/each}
</div>