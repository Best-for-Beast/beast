<script lang="ts">
  import type { Gender } from '../../../services/api/pets/contracts'
  import ArrowCircleRightIcon from '../../../assets/svg/arrow-circle-right.svg'
  import { formatPetAge } from './helpers'
  import PetGender from './PetGender.svelte'

  export let id: string
  export let name: string
  export let gender: Gender
  export let description = ''
  export let imageURL = 'https://dummyimage.com/305x420'
  export let dateOfBirthTimestamp: number | null = null

  const formattedPetAge = dateOfBirthTimestamp
    ? formatPetAge(dateOfBirthTimestamp)
    : ''
</script>

<div class="p-4 md:w-1/3">
  <div
    class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
    data-testid="pet-item-{id}">
    <img
      class="lg:h-48 md:h-36 w-full object-cover object-center"
      src={imageURL}
      alt="blog" />
    <div class="p-6">
      <h1
        class="title-font text-lg font-medium text-gray-900 mb-1 flex items-center">
        <PetGender {gender} />
        <span>{name}</span>
      </h1>
      <h2
        class="tracking-widest text-xs title-font font-medium text-gray-500 mb-3">
        {formattedPetAge}
      </h2>
      <p class="leading-relaxed mb-3">{description}</p>
      <div class="text-right">
        <a
          class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          href={`/#/pet/${id}`}>
          <span>Details</span>
          <ArrowCircleRightIcon class="pl-1 h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</div>
