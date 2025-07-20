<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let loading: boolean = $state(true);

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 3500);
	});

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
<div class="h-screen w-full bg-offWhite">
	{#if loading}
		<div class={`flex h-full w-full items-end p-12 mobile:p-6 mobile:pl-8`}>
			<Loading />
		</div>
	{:else}
		<div class="content h-full overflow-y-hidden">
			<Navbar />
			<div class="h-full">{@render children()}</div>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
	:global(html) {
		@font-face {
			font-family: NyghtSerif;
			src: url('/fonts/Nyght Serif/Nyght Serif.otf');
		}
	}
</style>
