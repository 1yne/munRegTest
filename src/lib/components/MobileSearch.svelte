<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { backInOut } from 'svelte/easing';

	let active = $state(false),
		hover = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div>
	<button
		class="flex h-12 w-12 hover:w-[calc(100vw-4rem)] hover:h-48 flex-col items-left justify-center gap-4 rounded-3xl border border-white/50 bg-black/75 hover:px-6 py-4 transition-all hover:border-white"
		onmouseenter={() => (hover = true)}
		onmouseleave={() => (hover = false)}
	>
		{#if hover}
			<a
				href="/committees"
				in:fly={{ y: 40, duration: 750, easing: backInOut }}
				class={`font-montserrat uppercase ${$page.route.id?.includes('committees') ? 'text-white' : 'text-white/50'} transition-all hover:text-white text-left`}
				>Committees</a
			>
			<hr class="text-white/50" />
			<a
				href="/register"
				in:fly={{ y: 40, duration: 750, delay: 100, easing: backInOut }}
				class="font-montserrat uppercase text-white/50 transition-all hover:text-white text-left">Register</a
			>
			<hr class="text-white/50" />
			<a
				href="/register"
				in:fly={{ y: 40, duration: 750, delay: 200, easing: backInOut }}
				class="font-montserrat uppercase text-white/50 transition-all hover:text-white text-left"
				>Country Matrix</a
			>
		{:else}
			<div in:fly={{ delay: 150, y: 40, easing: backInOut }} class="w-full flex justify-center h-4">
				<Menu class={`text-white/50 transition-all ${hover || active ? '!text-[#d60202]' : ''}`} />
			</div>
		{/if}
	</button>
</div>