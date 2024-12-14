<script lang="ts">
	import Search from "./Search.svelte";
</script>

<div class={`footer fixed bottom-0 flex w-full justify-center py-8 ${active ? '' : ''}`}>
	<Search />
</div>\