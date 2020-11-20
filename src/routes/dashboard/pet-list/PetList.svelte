<script lang="ts">
  import { getPets, postPet } from '../../../services/api/pets'
  import PetListItem from './PetListItem.svelte'
  import PetListAddItem from './PetListAddItem.svelte'
  import CreatePet from './CreatePet.svelte'
  import type { CreatePetDto } from '../../../services/api/pets/contracts'

  let isPetCreationOn = false
  let pets = getPets()
  const cancelNewPet = () => {
    isPetCreationOn = false
  }
  const createNewPet = async (newPet: CreatePetDto) => {
    await postPet(newPet)
    isPetCreationOn = false
    pets = getPets()
  }
</script>

<div class="flex flex-wrap -m-4">
  {#await pets}
    <p>...waiting</p>
  {:then fetchedPets}
    {#each fetchedPets as pet}
      <PetListItem {...pet} />
    {/each}
  {:catch error}
    <p>An error occurred! {error}</p>
  {/await}
  {#if isPetCreationOn}
    <CreatePet onCancel={cancelNewPet} onCreate={createNewPet} />
  {:else}
    <PetListAddItem bind:isPetCreationOn />
  {/if}
</div>
