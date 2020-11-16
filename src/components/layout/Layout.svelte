<script>
  import Container from './Container.svelte'
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
</script>

<Header />
<Container>
  <slot />
</Container>
<Footer />
