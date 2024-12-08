export function transitions() {
	const tl = gsap.timeline({ delay: 3 });

	tl.to(".heroText", { scale: 3.5, duration: 0.5 });
	tl.to(".heroText", { border: "0.015px rgba(255, 255, 255, 0.2) solid", duration: 2 })
}
