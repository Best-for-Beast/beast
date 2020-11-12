<script lang="ts">
  import Router from 'svelte-spa-router'

  import { Dashboard } from './dashboard'
  import { NotFound } from './not-found'

  const routes = {
    '/': Dashboard,
    '*': NotFound,
  }
</script>

<Router {routes} />
