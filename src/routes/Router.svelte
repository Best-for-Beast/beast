<script lang="ts">
  import Router from 'svelte-spa-router'
  import { Dashboard } from './dashboard'
  import { NotFound } from './not-found'
  import { Pet } from './pet'

  const routes = {
    '/': Dashboard,
    '/pets': Dashboard,
    '/pets/:id': Pet,
    '*': NotFound,
  }
</script>

<Router {routes} />
