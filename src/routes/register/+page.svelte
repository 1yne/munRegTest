<script>
	import { page } from '$app/stores';
	import SplitText from '$lib/components/SplitText.svelte';
</script>

<div class="wrapper">
	<SplitText text="Register" />
</div>

<style>
	:global(.wrapper > div > span) {
		font-size: 4rem !important;
	}
</style>
