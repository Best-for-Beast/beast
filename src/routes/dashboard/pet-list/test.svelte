<script lang="ts">
  import PETS from '../../../mocks/data/pets'
  import PetListAddItem from './PetListAddItem.svelte'
  import type { PetDto } from '../../../services/api/pets/contracts'

  const getPets = (): Promise<PetDto[]> => {
    return new Promise((resolve) => {
      resolve(PETS)
    })
  }
</script>

{#await getPets()}
  <p>...waiting</p>
{:then data}
  <div class="flex flex-wrap -m-4">
    {#each data as pet}
      <h1>{pet.name}</h1>
    {/each}
    <PetListAddItem />
  </div>
{:catch error}
  <p>An error occurred! {error}</p>
{/await}
