<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { store as searchStore } from '$lib/stores/store';
	import { navigateStore } from '$lib/stores/navigateStore';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

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
<div
	class={`absolute bottom-[2rem] flex w-full items-center justify-between py-12 pb-0 font-montserrat transition-all duration-1000 ${$searchStore.searchActive ? 'blur-[8px]' : ''}`}
>
	{#if !$navigateStore.navigating}
		<h1
			class="flex h-12 items-center uppercase"
			in:fly|global={{ y: 10, duration: 500 }}
			out:fly|global={{ y: -10, duration: 500, delay: 500 }}
			onoutroend={() => goto($navigateStore.navigateTo)}
		>
			24-25 October 2025
		</h1>
	{/if}
</div>
