<div class="p-12">
  <h1 class="loading font-mortend">Loading</h1>
</div>

<style>
	.loading:after {
		overflow: hidden;
		display: inline-block;
		vertical-align: bottom;
		-webkit-animation: ellipsis steps(4, end) 900ms infinite;
		animation: ellipsis steps(4, end) 900ms infinite;
		content: '\2026';
		width: 0px;
	}

	@keyframes ellipsis {
		to {
			width: 1.25em;
		}
	}

	@-webkit-keyframes ellipsis {
		to {
			width: 1.25em;
		}
	}
</style>