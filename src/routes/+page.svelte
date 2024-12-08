<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';

	let loading: boolean;

	onMount(() => {
		loading = true;
		setTimeout(() => {
			loading = false;
			transitions()
		}, 1500);
	});
</script>

<div class={`flex h-screen w-full ${loading ? 'items-end' : 'items-center justify-center'}`}>
	<div class="heroText px-4 rounded-lg">
		{#if loading}
			<div class="p-12">
				<h1 class="loading font-mortend">Loading</h1>
			</div>
		{:else}
			<div>
				<SplitText text="RoMUN 2025" />
			</div>
		{/if}
	</div>
</div>

<style>
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