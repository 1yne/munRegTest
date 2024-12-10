<script lang="ts">
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	let active = false;
	let hover = false;

	function focus(el: HTMLElement) {
		el.focus();
	}

	console.log(hover);
</script>

<div class="fixed bottom-0 flex w-full justify-center py-8">
	<button
		onclick={() => (active = true)}
		onmouseenter={() => (hover = true)}
		onmouseleave={() => (hover = false)}
		class={`searchBorder flex h-10 items-center gap-4 rounded-3xl border border-white/50 py-2 px-6 transition-all hover:border-[#D60202]`}
	>
		<Search class="text-white/50 transition-all" />
		{#if active}
			<input
				type="text"
				use:focus
				onfocusout={() => (setTimeout(() => active = false, 250))}
				class={`searchInput bg-transparent font-montserrat text-white/50 caret-white/50 transition-all focus:outline-none ${hover ? '!text-white !caret-[#D60202]' : ''}`}
			/>
		{/if}
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
</style>
