<script>
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import { currentPictureState } from '$lib/components/Carousel/currentPicture.svelte';
</script>

<div class="fixed top-0 h-full w-full px-12 py-6">
	<div class="flex h-full w-full">
		{#key $currentPictureState}
			<div class="flex h-full w-1/2 flex-col items-center justify-center">
				<h1 class="font-nyghtSerif text-[9rem] leading-tight text-black">
					{$currentPictureState.name}
				</h1>
				<p class="font-montserrat uppercase text-black">{$currentPictureState.full}</p>
			</div>
		{/key}
		<div class="flex h-full w-1/2 items-center justify-center">
			<Carousel />
		</div>
	</div>
</div>
