<script>
  import Card from "../lib/components/Card/Card.svelte";
  let age = Math.abs(new Date(Date.now() - new Date(1990, 5, 15).getTime()).getUTCFullYear() - 1970);
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Card location="Barcelona, Spain" email="15blex@gmail.com" age={age}/>