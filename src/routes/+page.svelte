<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { store as searchStore } from '$lib/stores/store';

	let loading: boolean;

	onMount(() => {
		loading = true;
		setTimeout(() => {
			loading = false;
			transitions();
		}, 1500);
	});
</script>

<div class="h-screen w-full bg-[url('/BG.png')] bg-cover">
	{#if loading}
		<div class={`flex h-full w-full items-end p-12 mobile:p-6 mobile:pl-8`}>
			<Loading />
		</div>
	{:else}
		<div class="content">
			<div class="contentWrapper transition-all duration-1000">
				<Navbar />
				<div class={`h-full w-full px-12 pt-16 mobile:px-6`}>
					<div class="heroText rounded-sm">
						<div class="text-white">
							<div class="mobile:w-full mobile:flex mobile:justify-center">
								<SplitText text="RoMUN" />
							</div>
							<div class="flex justify-end mobile:w-full mobile:justify-center">
								<SplitText text="2025" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class={`absolute p-12 pb-0 flex justify-between w-full font-montserrat bottom-[3rem] items-center transition-all duration-1000 ${$searchStore.searchActive ? 'blur-[8px]' : ''}`}>
				<h1 class="uppercase">24-25 October 2025</h1>
				<h1 class="uppercase">1yne</h1>
			</div>
			<Footer />
		</div>
	{/if}
</div>
