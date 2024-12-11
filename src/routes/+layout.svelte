<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css'
	import '$lib/styles/mediaQueries.css'
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher />
{@render children()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>