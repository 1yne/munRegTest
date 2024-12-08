<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import { onMount } from 'svelte';

	let loading: boolean;

	onMount(() => {
		loading = true;
		let durations = [1000, 2000, 3000, 4000];
		let randAnimDur = durations[Math.floor(Math.random() * durations.length)];
		setTimeout(() => {
			loading = false;
		}, randAnimDur);
	});
</script>

<div class={`flex h-screen w-full ${loading ? 'items-end' : 'items-center justify-center'}`}>
	{#if loading}
		<div class="p-12">
			<h1 class="loading font-mortend">Loading</h1>
		</div>
	{:else}
		<div class="heroText">
			<SplitText text="RoMUN 2025" />
		</div>
	{/if}
</div>

<style>
	@keyframes afterScale {
		0% {
			scale: 1;
		}

		100% {
			scale: 4;
		}
	}

	.heroText {
		animation: afterScale 0.5s forwards;
		animation-delay: 2750ms;
	}

	.loading:after {
		overflow: hidden;
		display: inline-block;
		vertical-align: bottom;
		-webkit-animation: ellipsis steps(4, end) 900ms infinite;
		animation: ellipsis steps(4, end) 900ms infinite;
		content: '\2026';
		width: 0px;
	}

	@keyframes ellipsis {
		to {
			width: 1.25em;
		}
	}

	@-webkit-keyframes ellipsis {
		to {
			width: 1.25em;
		}
	}
</style>