<script>
	import { currentPictureState } from '$lib/components/Carousel/currentPicture.svelte';
</script>

<div class="flex h-full w-full">
	<div class="w-1/2 px-12 pt-20">
		<h1 class="font-nyghtSerif text-8xl text-black">{$currentPictureState.name}</h1>
	</div>
	<div class="w-1/2">
		<img
			src={$currentPictureState.imageLink}
			class="h-full w-full object-cover currentPicture"
			alt=""
			style:--committeeImage={`image-${$currentPictureState.name}`}
		/>
	</div>
</div>

<style>
  .currentPicture {
    view-transition-name: var(--committeeImage);
  }
</style>