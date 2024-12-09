<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css'
	import '$lib/styles/mediaQueries.css'
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}
