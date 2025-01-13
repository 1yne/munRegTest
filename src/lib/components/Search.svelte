<script lang="ts">
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import { store as searchStore } from '$lib/stores/store';
	import searchData, { type SearchData } from './searchData';
	import { slide } from 'svelte/transition';

	let active = $state(false),
		hover = $state(false),
		searchValue = $state(''),
		searchResults: SearchData[] = $state([]);

	function focus(el: HTMLElement) {
		el.focus();
	}

	function searchValues() {
		if (searchValue) {
			searchResults = searchData.filter((val) =>
				val.name.toLocaleLowerCase().includes(searchValue)
			);
		} else {
			searchResults = [];
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="transition-all] flex flex-col rounded-3xl border border-white/50 hover:border-[#D60202]"
	onmouseenter={() => (hover = true)}
	onmouseleave={() => (hover = false)}
>
	{#if searchResults}
		<div transition:slide|global class="w-full overflow-scroll rounded-t-3xl">
			{#each searchResults as searchResult}
				<button
					transition:slide
					class="flex w-full flex-col items-start border-b border-white/50 px-6 py-2"
				>
					<h1 class="text-xl font-black">{searchResult.name}</h1>
					<p class="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur.</p>
				</button>
			{/each}
		</div>
	{/if}
	<button
		class="flex h-12 w-full items-center justify-center gap-4 px-6 py-4"
		onclick={() => {
			active = true;
			$searchStore.searchActive = true;
		}}
	>
		<Search class={`text-white/50 transition-all ${hover || active ? '!text-[#d60202]' : ''}`} />
		{#if active}
			<input
				type="text"
				use:focus
				bind:value={searchValue}
				oninput={searchValues}
				onfocusout={() => {
					setTimeout(() => {
						active = false;
						$searchStore.searchActive = false;
						searchResults = [];
						searchValue = '';
					}, 250);
				}}
				class="searchInput h-4 bg-transparent font-montserrat text-white caret-[#D60202] transition-all focus:outline-none"
			/>
		{/if}
	</button>
</div>
