<script>
	import { allDataStore } from '$lib/components/Carousel/currentPicture.svelte';
	import { page } from '$app/stores';

	let committeeData = $state($allDataStore.filter((val) => val.name.toLocaleLowerCase() == $page.params.committeeId)[0])
	$inspect(committeeData)
</script>

<div class="flex h-full w-full">
	<div class="w-1/2 px-12 py-12 pt-20 flex flex-col justify-between">
		<div>
			<h1 class="font-nyghtSerif text-8xl text-black text-[14cqw] leading-[0.75]">{committeeData.name}</h1>
			<p class="uppercase font-montserrat text-black mt-8">{committeeData.full}</p>
		</div>
		<div class="font-montserrat">
			<div class="border-[#e1deb7] border-2 rounded-lg text-black p-6 py-4">
				<h1>AGENDA: {committeeData.agenda}</h1>
			</div>
			<p class="text-black leading-tight mt-8">{committeeData.description}</p>
		</div>
	</div>
	<div class="w-1/2">
		<img
			src={committeeData.imageLink}
			class="h-full w-full object-cover currentPicture"
			alt=""
			style:--committeeImage={`image-${committeeData.name}`}
		/>
	</div>
</div>

<style>
  .currentPicture {
    view-transition-name: var(--committeeImage);
  }
</style>