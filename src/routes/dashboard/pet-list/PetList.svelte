<script lang="ts">
  import { getPets } from '../../../services/api/pets'
  import PetListItem from './PetListItem.svelte'
  import PetListAddItem from './PetListAddItem.svelte'
  import CreatePet from './CreatePet.svelte'

  let isPetCreationOn = false
</script>

<div class="flex flex-wrap -m-4">
  {#await getPets()}
    <p>...waiting</p>
  {:then fetchedPets}
    {#each fetchedPets as pet}
      <PetListItem {...pet} />
    {/each}
  {:catch error}
    <p>An error occurred! {error}</p>
  {/await}
  {#if isPetCreationOn}
    <CreatePet bind:isPetCreationOn />
  {:else}
    <PetListAddItem bind:isPetCreationOn />
  {/if}
</div>
