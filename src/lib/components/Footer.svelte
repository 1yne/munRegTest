<script lang="ts">
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	let active = false;
	let hover = false;

	function focus(el: HTMLElement) {
		el.focus();
	}
</script>

<div class="fixed bottom-0 flex w-full justify-center py-8">
	<button
		onclick={() => (active = true)}
		onmouseenter={() => (hover = true)}
		onmouseleave={() => (hover = false)}
		class={`searchBorder flex h-12 items-center rounded-3xl border border-white/50 px-6 py-2 transition-all hover:border-[#D60202] ${active ? '!items-end !px-0 !py-4 !pb-0' : ''}`}
	>
		<div class={`flex items-center gap-4 ${active ? 'border-t border-white/50 px-6 py-3' : ''}`}>
			<Search class={`text-white/50 transition-all ${hover ? '!text-[#d60202]' : ''}`} />
			{#if active}
				<input
					type="text"
					use:focus
					onfocusout={() => setTimeout(() => (active = false), 250)}
					class={`searchInput bg-transparent font-montserrat text-white/50 caret-white/50 transition-all focus:outline-none ${hover ? '!text-white !caret-[#D60202]' : ''}`}
				/>
			{/if}
		</div>
	</button>
</div>

<style>
	:global(.searchBorder:hover > svg) {
		color: white;
	}
	@keyframes animateWidthIn {
		0% {
			width: 0;
		}
		100% {
			width: 12rem;
		}
	}
	@keyframes animateHeightIn {
		0% {
			height: 3rem;
		}
		100% {
			height: 12rem;
		}
	}
	@keyframes animateHeightOut {
		0% {
			height: 12rem;
		}
		100% {
			height: 3rem;
		}
	}

	@keyframes animateWidthOut {
		0% {
			width: 12rem;
		}
		100% {
			width: 0;
		}
	}

	.searchInput:focus {
		animation: animateWidthIn 0.25s forwards;
	}
	.searchInput:not(.searchInput:focus) {
		animation: animateWidthOut 0.25s forwards;
	}
	.searchBorder:has(.searchInput:focus) {
		animation: animateHeightIn 0.25s forwards;
	}
	.searchBorder:has(.searchInput:not(.searchInput:focus)) {
		animation: animateHeightOut 0.25s forwards;
	}
</style>
