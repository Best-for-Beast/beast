<script lang="ts">
  import { Layout } from '../../components/layout'
  import { getPet } from '../../services/api/pets'
  import HealthRecord from './HealthRecord.svelte'

  type QueryParams = { id: string }

  export let params: QueryParams
  const pet = getPet(params.id)
</script>

<Layout>
  {#await pet}
    <p>...waiting</p>
  {:then fetchedPet}
    {#each fetchedPet.healthRecords as healthRecord}
      <HealthRecord {healthRecord} />
    {/each}
  {:catch error}
    <p>An error occurred! {error}</p>
  {/await}
</Layout>
