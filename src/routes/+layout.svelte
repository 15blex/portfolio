<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
  import Header from '$lib/components/Header/Header.svelte';
  import '../reset.css'
</script>
<style>
  :global(body) {
    background-image: linear-gradient(148deg, green, white,red);
    background-size: 200% 200%;
    animation: gradient-animation 12s ease infinite;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    perspective: 1500px;
  }
  main {
    flex: 1;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
<Header />
<main>
  <slot />  
</main>
<Footer />
