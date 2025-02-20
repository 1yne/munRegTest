<script lang="ts">
	import { onMount } from 'svelte';
	import { fitText } from '$lib/fitText';

	let windowWidth = $state(0);

  function adjustHeadlineWidth(width: number) {
    if (width > 645) {
      window.fitText(document.getElementById('title'), 0.655);
    } else {
      window.fitText(document.getElementsByClassName('title')[0], 0.405);
      window.fitText(document.getElementsByClassName('title')[1], 0.405);
    }
  }

	onMount(() => {
		fitText();
    adjustHeadlineWidth(windowWidth)
	});

  $effect(() => {
    adjustHeadlineWidth(windowWidth)
  })
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	class="flex h-[38%] flex-col px-12 py-6 pb-[2.5rem] text-black justify-between mobile:px-6 mobile:pb-6"
>
	<h1 id="title" class="mb-8 flex justify-center font-nyghtSerif leading-none mobile:hidden">RoMUN 2025</h1>
	<div class="hidden w-full mobile:block font-nyghtSerif leading-none">
		<h1 class="title">RoMUN</h1>
		<h1 class="title">2025</h1>
	</div>
	<div class="flex w-full justify-between">
		<h2 class="font-montserrat text-lg mobile:text-sm">25-26 October 2025</h2>
		<h2 class="font-montserrat text-lg mobile:text-sm">RCIS, Kalyan Nagar</h2>
	</div>
</div>
<div class={`h-[62%] overflow-hidden bg-[url('/HeroImg.jpg')] bg-cover bg-center`}></div>
