<script lang="ts">
  import Router from 'svelte-spa-router'

  import { Dashboard, DashboardEmpty } from './dashboard'
  import { NotFound } from './not-found'

  const routes = {
    '/': Dashboard,
    '/pets': Dashboard,
    '/pets/empty': DashboardEmpty,
    '*': NotFound,
  }
</script>

<Router {routes} />
