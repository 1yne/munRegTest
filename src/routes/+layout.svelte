<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';

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
		<div
			class={`flex h-full w-full items-end p-12 mobile:p-6 mobile:pl-8`}
			out:fly={{ y: 40, duration: 150 }}
		>
			<Loading />
		</div>
	{:else}
		<div class="content h-full" transition:fly={{ y: 40, duration: 500, delay: 300 }}>
			<Navbar />
			<div class="h-full">{@render children()}</div>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
