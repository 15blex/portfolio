<script lang="ts">
	import '$lib/app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<header>H</header>
	<main>
		{@render children()}
	</main>
	<footer>F</footer>
</ParaglideJS>
