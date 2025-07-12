<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<script>
		document.documentElement.classList.add('dark');
	</script>
	<title>Eko</title>
	<meta name="description" content="Social Media for Everyone" />
</svelte:head>

{@render children()}
