<script>
	import { currentPictureState } from '$lib/components/Carousel/currentPicture.svelte';
</script>

<div class="flex h-full w-full">
	<div class="w-1/2 px-12 py-12 pt-20 flex flex-col justify-between">
		<div>
			<h1 class="font-nyghtSerif text-8xl text-black text-[14cqw] leading-[0.75]">{$currentPictureState.name}</h1>
			<p class="uppercase font-montserrat text-black mt-8">{$currentPictureState.full}</p>
		</div>
		<div class="font-montserrat">
			<div class="border-[#e1deb7] border-2 rounded-lg text-black p-6 py-4">
				<h1>AGENDA: {$currentPictureState.agenda}</h1>
			</div>
			<p class="text-black leading-tight mt-8">{$currentPictureState.description}</p>
		</div>
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