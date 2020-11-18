<script lang="ts">
  import { getPets } from '../../../services/api/pets'
  import PetListItem from './PetListItem.svelte'
  import PetListAddItem from './PetListAddItem.svelte'

  const fetchedPets = getPets()
</script>

{#await fetchedPets}
  <p>...waiting</p>
{:then fetchedPets}
  <div class="flex flex-wrap -m-4">
    {#each fetchedPets as pet}
      <PetListItem {...pet} />
    {/each}
    <PetListAddItem />
  </div>
{:catch error}
  <p>An error occurred! {error}</p>
{/await}
