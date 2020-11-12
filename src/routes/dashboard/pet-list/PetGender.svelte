<script lang="ts">
  import { Gender } from '../../../services/api/pets/interfaces'
  import MaleIcon from '../../../assets/svg/male.svg'
  import FemaleIcon from '../../../assets/svg/female.svg'

  export let gender: Gender

  const iconSize = '15px'
  const width = iconSize
  const height = iconSize
  const className = gender !== Gender.Undefined ? 'pr-2' : ''
</script>

<div class={className}>
  {#if gender === Gender.Male}
    <MaleIcon {width} {height} />
  {:else if gender === Gender.Female}
    <FemaleIcon {width} {height} />
  {/if}
</div>
