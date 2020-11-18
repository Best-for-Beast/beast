import PetList from '../routes/dashboard/pet-list/PetList.svelte'
import { render } from '@testing-library/svelte'

describe('As a pet owner I want to add new pet so I can see it among rest of my pets.', () => {
  it('GIVEN pet list WHEN pet owner clicks add new pet THEN A tile with editable form with fields: <Name>, <Type>, <Breed>, <Birthdate>, <Gender>, <Description>, <Photo> is added to pet list', async () => {
    // Arrange
    render(PetList)
    // Act
  })
})
