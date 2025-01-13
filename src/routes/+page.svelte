<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { navigateStore } from '$lib/stores/navigateStore';

	onMount(() => {
		transitions();
	});
</script>

<div class="h-full w-full pt-16">
	{#if !$navigateStore.navigating}
		<div class="heroText rounded-sm">
			<div class="text-white">
				<div class="mobile:flex mobile:w-full mobile:justify-center">
					<SplitText text="RoMUN" />
				</div>
				<div class="flex justify-end mobile:w-full mobile:justify-center">
					<SplitText text="2025" />
				</div>
			</div>
		</div>
	{/if}
</div>
