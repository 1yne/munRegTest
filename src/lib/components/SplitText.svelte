<script lang="ts">
	let { text } = $props();

	let splitText = text.split('');
</script>

<div class="cursor-default splitText">
	{#each splitText as textChar, i}
		<span
			class="font-nexusbold text-[40rem] leading-none opacity-0"
			style={`animation-delay: ${1000 + i * 100}ms`}>{textChar}</span
		>
	{/each}
</div>

<style>
	@keyframes move-text {
		0% {
			bottom: -0.3em;
			opacity: 0;
		}

		100% {
			bottom: 0;
			opacity: 1;
		}
	}

	@keyframes scale-text-down {
		0% {
			scale: 1;
		}

		100% {
			scale: 0;
      display: none;
		}
	}

	span {
		animation: move-text 0.5s forwards;
		position: relative; /* <- can be commented out to make this effect a fade-in */
	}
  
  .splitText {
    animation: scale-text-down 0.5s forwards;
    animation-delay: 3500ms;
  }
</style>
