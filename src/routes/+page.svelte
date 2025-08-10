<script lang="ts">
	import { onMount } from 'svelte';
	import { fitText } from '$lib/fitText';
	import { fade, fly } from 'svelte/transition';

	let windowWidth = $state(0);
	let animate = $state(false)

	function adjustHeadlineWidth(width: number) {
		if (width > 645) {
			window.fitText(document.getElementById('title'), 0.604);
		} else {
			window.fitText(document.getElementsByClassName('title')[0], 0.405);
			window.fitText(document.getElementsByClassName('title')[1], 0.405);
		}
	}

	onMount(() => {
		animate = true
		fitText();
		adjustHeadlineWidth(windowWidth);
		console.log()
	});

	$effect(() => {
		adjustHeadlineWidth(windowWidth);
	});

	$inspect(animate)
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="h-full">
	{#if animate}
		<div class="flex h-1/2 flex-col justify-between p-12 pt-20 text-black mobile:p-6">
			<h1 id="title" transition:fly={{ y: 40, duration: 150}} class="flex justify-center font-nyghtSerif leading-none mobile:hidden">
				RoMUN 2025
			</h1>
			<div class="hidden w-full font-nyghtSerif leading-none mobile:block">
				<h1 class="title">RoMUN</h1>
				<h1 class="title">2025</h1>
			</div>
			<div class="flex w-full justify-between">
				<h2 class="font-montserrat text-lg mobile:text-sm" transition:fly={{ y: 40, duration: 150, delay: 150 }}>25-26 October 2025</h2>
				<h2 class="font-montserrat text-lg mobile:text-sm" transition:fly={{ y: 40, duration: 150, delay: 300 }}>RCIS, Kalyan Nagar</h2>
			</div>
		</div>
		<div class="h-1/2 overflow-hidden bg-[url('/HeroImg.jpg')] bg-cover bg-center" transition:fade={{ duration: 150 }}></div>
	{/if}
</div>