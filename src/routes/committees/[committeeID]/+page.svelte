<script>
	import { page } from '$app/stores';
	import SplitText from '$lib/components/SplitText.svelte';
	import { navigateStore } from '$lib/stores/navigateStore';
</script>

{#if !$navigateStore.navigating}
	<div class="wrapper">
		<SplitText text={$page.url.pathname.replace('/committees/', '')} />
	</div>
{/if}

<style>
	:global(.wrapper > div > span) {
		font-size: 4rem !important;
	}
</style>
