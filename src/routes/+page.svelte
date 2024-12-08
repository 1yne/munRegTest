<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import Loading from '$lib/components/Loading.svelte';
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
			<Loading />
		{:else}
			<div>
				<SplitText text="RoMUN 2025" />
			</div>
		{/if}
	</div>
</div>