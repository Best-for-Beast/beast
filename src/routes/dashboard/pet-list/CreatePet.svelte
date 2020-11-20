<script lang="ts">
  import FileUpload from '../../../assets/svg/file-upload.svg'
  import { Gender } from '../../../services/api/pets/contracts'
  import type { CreatePetDto } from '../../../services/api/pets/contracts'

  export let onCancel: () => void
  export let onCreate: (newPet: CreatePetDto) => void

  const resetPet = (): CreatePetDto => {
    return {
      name: '',
      gender: Gender.Undefined,
      dateOfBirthTimestamp: undefined,
      description: '',
      imageURL: '',
    }
  }

  const newPet: CreatePetDto = resetPet()
</script>

<div class="p-4 md:w-1/3">
  <div class="h-full shadow sm:rounded-md rounded-lg overflow-hidden">
    <form
      action="#"
      method="POST"
      data-testid="create-pet-form"
      on:submit|preventDefault={() => {
        onCreate(newPet)
        resetPet()
      }}>
      <div class="px-4 py-4 grid grid-cols-6 gap-3">
        <!--PHOTO-->
        <div class="col-span-6">
          <span class="block text-sm font-medium text-gray-700">
            Cover photo
          </span>
          <div
            class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center" data-testid="pet-photo">
              <FileUpload />
              <p class="text-sm text-gray-600">
                <button
                  type="button"
                  class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Upload a file
                </button>
                or drag and drop
              </p>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <!--NAME-->
        <div class="col-span-3">
          <label
            for="pet_name"
            class="block text-sm font-medium text-gray-700">Pet's name</label>
          <input
            data-testid="pet-name"
            type="text"
            bind:value={newPet.name}
            id="pet_name"
            class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        <!--GENDER-->
        <div class="col-span-3">
          <label
            for="pet_gender"
            class="block text-sm font-medium text-gray-700">Gender</label>
          <input
            data-testid="pet-gender"
            type="text"
            id="pet_gender"
            class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        <!--TYPE-->
        <div class="col-span-3">
          <label
            for="pet_type"
            class="block text-sm font-medium text-gray-700">Type</label>
          <select
            data-testid="pet-type"
            id="pet_type"
            class="mt-1 block w-full p-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Dog</option>
            <option>Cat</option>
          </select>
        </div>
        <!--BIRTHDATE-->
        <div class="col-span-3">
          <label
            for="birthdate"
            class="block text-sm font-medium text-gray-700">Birthdate</label>
          <input
            data-testid="pet-birthdate"
            type="date"
            id="birthdate"
            class="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        <!--Breed-->
        <div class="col-span-6">
          <label
            for="pet_breed"
            class="block text-sm font-medium text-gray-700">Pet's breed</label>
          <input
            data-testid="pet-breed"
            type="text"
            id="pet_breed"
            class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        <!--DESCRIPTION-->
        <div class="col-span-6">
          <label
            for="pet-description"
            class="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div class="mt-1">
            <textarea
              data-testid="pet-description"
              id="pet-description"
              rows="2"
              class="p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <!--ADD/CANCEL-->
        <div class="col-span-6 flex">
          <button
            type="button"
            data-testid="pet-cancel-button"
            on:click={() => {
              onCancel()
              resetPet()
            }}
            class="mx-auto text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg">
            Cancel
          </button>
          <button
            type="submit"
            disabled={newPet.name.length === 0 || undefined}
            data-testid="pet-create-button"
            class="disabled:opacity-50 mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Create
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
