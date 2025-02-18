<script>
	import { onMount } from 'svelte';
	import { fitText } from '$lib/fitText';

	onMount(() => {
		fitText();
		// @ts-ignore
		window.fitText(document.getElementById('title'), 0.605);
	});
</script>

<div class="overflow-hidden">
  <div class="px-12 py-6 pb-[2.5rem] text-black mobile:px-6">
    <h1 id="title" class="mb-8 font-nyghtSerif leading-none">RoMUN 2025</h1>
    <div class="flex w-full justify-between">
      <h2 class="font-montserrat text-lg">25-26 October 2025</h2>
      <h2 class="font-montserrat text-lg">RCIS, Kalyan Nagar</h2>
    </div>
  </div>
  <div class="h-[51.25vh] bg-[url('/HeroImg.jpg')] bg-cover bg-center"></div>
</div>

