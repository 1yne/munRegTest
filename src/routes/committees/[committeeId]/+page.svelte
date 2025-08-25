<script>
	import { allDataStore } from '$lib/components/Carousel/currentPicture.svelte';
	import { page } from '$app/stores';

	let committeeData = $state(
		$allDataStore.filter((val) => val.name.toLocaleLowerCase() == $page.params.committeeId)[0]
	);
	$inspect(committeeData);
</script>

<div class="flex h-full w-full">
	<div class="flex w-1/2 flex-col justify-between px-12 py-12 pt-20">
		<div>
			<h1 class="font-nyghtSerif text-8xl text-[14cqw] leading-[0.75] text-black">
				{committeeData.name}
			</h1>
			<p class="mt-8 font-montserrat uppercase text-black">{committeeData.full}</p>
		</div>
		<div class="font-montserrat">
			<div class="rounded-lg border-2 border-[#e1deb7] p-6 py-4 text-black">
				<h1>AGENDA: {committeeData.agenda}</h1>
			</div>
			<p class="mt-8 leading-tight text-black">{committeeData.description}</p>
		</div>
	</div>
	<div class="w-1/2">
		<img
			src={committeeData.imageLink}
			class="currentPicture h-full w-full object-cover"
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
