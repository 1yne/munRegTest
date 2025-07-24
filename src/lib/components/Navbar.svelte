<script>
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import ChevronLeft from "carbon-icons-svelte/lib/ChevronLeft.svelte";
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';

	const links = [
		{
			link: '/committees',
			name: 'Committees'
		},
		{
			link: '/register',
			name: 'Register'
		}
	];
</script>

<div
	transition:fade={{ duration: 5 }}
	class={`fixed flex h-20 w-full items-center ${$page.route.id == '/' ? 'justify-end border-b border-black' : 'justify-between'} px-12 py-6 font-montserrat tracking-[0.18em] mobile:justify-between mobile:px-6 z-10`}
>
	{#if $page.route.id != '/'}
		<button
			class="text-black/50 transition-all hover:text-black"
			in:fly|global={{ y: 40, duration: 750, delay: 250 }}
			out:fly|global={{ y: 40, duration: 750 }}
			><a href="/">
				<ChevronLeft size={24} />
			</a></button
		>
	{/if}
	<div class="w-full">
		<div class="flex justify-end gap-12 mobile:hidden">
			{#each links as link, i}
				<button
					class={`font-normal uppercase ${$page.route.id?.includes(link.link) ? 'text-black' : 'text-black'} transition-all hover:text-black/50`}
					in:fade|global={{ duration: 250, delay: i * 250 }}
					><a href={link.link}>{link.name}</a></button
				>
			{/each}
		</div>
		<div class="hidden w-full justify-end mobile:flex">
			<Menu size={24} class="text-black" />
		</div>
	</div>
</div>
