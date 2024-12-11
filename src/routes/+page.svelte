<script lang="ts">
	import SplitText from '$lib/components/SplitText.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { fade } from 'svelte/transition';

	let loading: boolean;

	onMount(() => {
		loading = true;
		setTimeout(() => {
			loading = false;
			transitions();
		}, 1500);
	});
</script>

<div class="h-screen w-full">
	{#if loading}
		<div class={`flex h-full w-full items-end p-12 mobile:p-6`}>
			<Loading />
		</div>
	{:else}
		<div class="content">
			<div class="contentWrapper transition-all duration-1000">
				<Navbar />
				<div class={`h-full w-full px-3 pt-16`}>
					<div class="heroText rounded-sm px-4">
						<div class="text-[#D60202]">
							<SplitText text="RoMUN" />
							<div class="flex justify-end">
								<SplitText text="2025" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	{/if}
</div>
