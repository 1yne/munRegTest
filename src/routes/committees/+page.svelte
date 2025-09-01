<script>
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import MobileCarousel from '$lib/components/Carousel/MobileCarousel.svelte';
	import { currentPictureState } from '$lib/components/Carousel/currentPicture.svelte';
</script>

<div class="fixed top-0 h-full w-full px-12 py-6 pt-28 mobile:px-6">
	<div class="flex h-full w-full mobile:hidden">
		{#key $currentPictureState}
			<div class="flex h-full w-1/2 flex-col items-center justify-center">
				<h1 class="nyghtSerif text-[9rem] leading-tight text-black">
					{$currentPictureState.name}
				</h1>
				<p class="font-montserrat uppercase text-black">{$currentPictureState.full}</p>
			</div>
		{/key}
		<div class="flex h-full w-1/2 items-center justify-center">
			<Carousel />
		</div>
	</div>
	<div class="hidden mobile:flex h-full w-full flex-col">
		<div class="flex h-1/2 w-full items-center justify-center">
			<MobileCarousel />
		</div>
		{#key $currentPictureState}
			<div class="flex h-1/2 w-full flex-col items-center justify-center">
				<h1 class="nyghtSerif text-[6rem] leading-tight text-black">
					{$currentPictureState.name}
				</h1>
				<p class="font-montserrat uppercase text-black">{$currentPictureState.full}</p>
			</div>
		{/key}
	</div>
</div>
