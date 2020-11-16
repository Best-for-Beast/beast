<script lang="ts">
  import { getPets } from '../../../services/api/pets'
  import PetListItem from './PetListItem.svelte'
  import PetListAddItem from './PetListAddItem.svelte'
</script>

{#await getPets()}
  <p>...waiting</p>
{:then data}
  <div class="flex flex-wrap -m-4">
    {#each data.pets as pet}
      <PetListItem {...pet} />
    {/each}
    <PetListAddItem />
  </div>
{:catch error}
  <p>An error occurred! {error}</p>
{/await}
