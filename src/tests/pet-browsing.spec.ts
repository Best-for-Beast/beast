import {
  render,
  waitFor,
  getByText,
  getByTestId,
} from '@testing-library/svelte'
import { PETS } from '../mocks/data/pets'
import PetList from '../routes/dashboard/pet-list/PetList.svelte'
import { DOM_TEST_IDS } from '../tests-identifiers'
import { Gender } from '../services/api/pets/contracts'

describe('As a Pet Owner I want to access Dashboard so that I can see the list of my pets', () => {
  it('Can see the list of owned pets (Name, Description, Gender, Age, Photo)', async () => {
    // Arrange
    const sut = render(PetList)
    // Act
    await waitFor(() => sut.getAllByTestId('pet-item', { exact: false }))
    // Assert
    PETS.forEach((pet) => {
      const petItem = sut.getByTestId(DOM_TEST_IDS.createPetCardItem(pet.id))
      expect(getByText(petItem, pet.name)).toBeDefined()
      expect(getByText(petItem, pet.description)).toBeDefined()
      expect(getByText(petItem, ' months', { exact: false })).toBeDefined()
      if (pet.gender === Gender.Female)
        expect(getByTestId(petItem, DOM_TEST_IDS.petFemaleIcon)).toBeDefined()
      if (pet.gender === Gender.Male)
        expect(getByTestId(petItem, DOM_TEST_IDS.petMaleIcon)).toBeDefined()
    })
  })
})
