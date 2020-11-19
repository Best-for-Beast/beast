<script lang="ts">
  import DogAndCatIcon from '../../../assets/svg/dog-and-cat.svg'
  export let isPetCreationOn: boolean
</script>

<div class="p-4 md:w-1/3">
  <div class="h-full shadow sm:rounded-md rounded-lg overflow-hidden">
    <DogAndCatIcon class="h-64 w-64 m-auto -mb-6" />
    <div class="pt-0 p-6">
      <div>
        <h1
          class="title-font text-lg font-medium text-gray-900 mb-1 flex items-center">
          <span>Add new family member!</span>
        </h1>
        <p class="leading-relaxed mb-3">
          Adding a pet allows you to keep track of health record book online.
          Click the button to access this feature and many others.
        </p>
      </div>
      <button
        data-testid="add-pet-button"
        on:click={() => (isPetCreationOn = true)}
        class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Add
      </button>
    </div>
  </div>
</div>
