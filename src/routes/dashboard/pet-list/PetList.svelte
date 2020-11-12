<script lang="ts">
  import { getPets } from '../../../services/api/pets'
  import PetListItem from './PetListItem.svelte'

  const fetchPets = getPets()
</script>

{#await fetchPets}
  <p>...waiting</p>
{:then data}
  <div class="flex flex-wrap -m-4">
    {#each data.pets as pet}
      <PetListItem {...pet} />
    {/each}
  </div>
{:catch error}
  <p>An error occurred! {error}</p>
{/await}
