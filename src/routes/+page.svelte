<script lang="ts">
	import { onMount } from 'svelte';
	import { fitText } from '$lib/fitText';
	import { fade, fly } from 'svelte/transition';

	let windowWidth = $state(0);

	function adjustHeadlineWidth(width: number) {
		if (width > 645) {
			window.fitText(document.getElementById('title'), 0.604);
		} else {
			window.fitText(document.getElementsByClassName('title')[0], 0.405);
			window.fitText(document.getElementsByClassName('title')[1], 0.405);
		}
	}

	onMount(() => {
		fitText();
		adjustHeadlineWidth(windowWidth);
	});

	$effect(() => {
		adjustHeadlineWidth(windowWidth);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="h-full pt-20">
	<div class="flex h-full flex-col justify-between p-12 pt-20 text-black mobile:p-6">
		<div>
			<h1
				class="link link--ersa inline-block font-nyghtSerif text-[14cqw] leading-[0.35] text-offWhite transition-all hover:text-black mobile:hidden"
				style="-webkit-text-stroke: black 1px;"
			>
				<span>UNITE.</span>
			</h1>
		</div>
		<div>
			<h1
				class="link link--ersa inline-block font-nyghtSerif text-[14cqw] leading-[0.35] text-offWhite transition-all hover:text-black mobile:hidden"
				style="-webkit-text-stroke: black 1px;"
			>
				<span>DEBATE.</span>
			</h1>
		</div>
		<div>
			<h1
				class="link link--ersa inline-block font-nyghtSerif text-[14cqw] leading-[0.35] text-offWhite transition-all hover:text-black mobile:hidden"
				style="-webkit-text-stroke: black 1px;"
			>
				<span>LEAD.</span>
			</h1>
		</div>
		<div class="hidden w-full font-nyghtSerif leading-none mobile:block">
			<h1 class="title">RoMUN</h1>
			<h1 class="title">2025</h1>
		</div>
		<div class="flex w-full justify-between">
			<h2 class="text-md font-montserrat mobile:text-sm">25-26 October 2025</h2>
			<h2 class="text-md font-montserrat mobile:text-sm">RCIS, Kalyan Nagar</h2>
		</div>
	</div>
</div>

<style>
	.link {
		position: relative;
	}

	.link::before,
	.link::after {
		position: absolute;
		width: 100%;
		height: 1px;
		background: currentColor;
		top: 100%;
		left: 0;
		pointer-events: none;
	}

	.link::before {
		content: '';
		/* show by default */
	}

	.link--ersa::before {
		top: 50%;
		height: 5px;
		transform-origin: 100% 50%;
		transform: scale3d(0, 1, 1);
		transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
	}

	.link--ersa:hover::before {
		transform-origin: 0% 50%;
		transform: scale3d(1, 1, 1);
	}

	.link--ersa span {
		display: inline-block;
		transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
	}

	.link--ersa:hover span {
		transform: scale3d(1.05, 1.05, 1.05);
	}
</style>
