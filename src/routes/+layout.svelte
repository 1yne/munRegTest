<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css';
	import '$lib/styles/mediaQueries.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
	import { onNavigate, goto, afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navigateStore } from '$lib/stores/navigateStore';
	import { fly } from 'svelte/transition';
	import { store as searchStore } from '$lib/stores/store';

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

	afterNavigate(() => {
		$navigateStore.navigating = false;
		$navigateStore.navigateTo = '';
	});
</script>

<ModeWatcher />
<div class="h-screen w-full bg-[url('/BG.png')] bg-cover">
	<div class="gridBG h-full w-full">
		{#if loading}
			<div class={`flex h-full w-full items-end p-12 mobile:p-6 mobile:pl-8`}>
				<Loading />
			</div>
		{:else}
			<div class="content">
				<div class="contentWrapper transition-all duration-1000">
					<Navbar />
					<div class="px-12 mobile:px-6">
						{@render children()}
					</div>
				</div>
				<div
					class={`absolute bottom-[2rem] flex w-full items-center justify-between px-12 font-montserrat transition-all duration-1000 ${$searchStore.searchActive ? 'blur-[8px]' : ''}`}
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
				<Footer />
			</div>
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
