<script lang="ts">
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import { store as searchStore } from '$lib/stores/store';
	let active = false;
	let hover = false;

	function focus(el: HTMLElement) {
		el.focus();
	}
</script>

<button
	onclick={() => {
		active = true;
		$searchStore.searchActive = true;
	}}
	onmouseenter={() => (hover = true)}
	onmouseleave={() => (hover = false)}
	class={`searchBorder flex h-12 items-center rounded-3xl border border-white/50 px-6 py-2 transition-all hover:border-[#D60202] ${active ? '!items-end !border-white !px-0 !py-4 !pb-0' : ''}`}
>
	<div class={`flex items-center gap-4 ${active ? 'border-t border-white/50 px-6 py-3' : ''}`}>
		<Search class={`text-white/50 transition-all ${hover || active ? '!text-[#d60202]' : ''}`} />
		{#if active}
			<input
				type="text"
				use:focus
				onfocusout={() =>
					setTimeout(() => {
						active = false;
						$searchStore.searchActive = false;
					}, 250)}
				class={`searchInput bg-transparent font-montserrat text-white caret-[#D60202] transition-all focus:outline-none`}
			/>
		{/if}
	</div>
</button>
