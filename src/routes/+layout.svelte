<script>
    import "../app.css";
	import Footer from "../lib/Footer.svelte";
    import Navbar from "../lib/Navbar.svelte";
</script>

<main class="fluid mx-auto">
    <Navbar />
    <slot />
    <Footer />
</main>