<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css'
	import '$lib/styles/mediaQueries.css'
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>