import PetList from '../routes/dashboard/pet-list/PetList.svelte'
import '@testing-library/jest-dom'
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
  queryByTestId,
} from '@testing-library/svelte'

describe('As a pet owner I want to add new pet so I can see it among rest of my pets.', () => {
  const petFormTestId = 'create-pet-form'

  it('GIVEN pet list WHEN pet owner enters the list THEN no form for adding pet is availible', () => {
    // Arrange + Act
    const sut = render(PetList)
    // Assert
    expect(queryByTestId(sut.container, petFormTestId)).not.toBeInTheDocument()
  })

  it('GIVEN pet list WHEN pet owner clicks add new pet THEN A tile with editable form with fields: <Name>, <Type>, <Breed>, <Birthdate>, <Gender>, <Description>, <Photo> is added to pet list', async () => {
    // Arrange
    const sut = render(PetList)
    const addButton = sut.getByTestId('add-pet-button')
    // Act
    await fireEvent.click(addButton)
    // Assert
    await waitFor(() => sut.getByTestId(petFormTestId))
    const addPetItem = sut.getByTestId(petFormTestId)
    expect(getByTestId(addPetItem, 'pet-name')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-type')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-breed')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-birthdate')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-gender')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-description')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-photo')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-create-button')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-cancel-button')).toBeInTheDocument()
  })

  it('GIVEN create pet form is availible in the dashboard AND at least pet <Name> is specified THEN create action is available', async () => {
    // Arrange
    const sut = render(PetList)
    await fireEvent.click(sut.getByTestId('add-pet-button'))
    const petNameInput = getByTestId(sut.container, 'pet-name')
    const petCreateButton = getByTestId(sut.container, 'pet-create-button')
    expect(petCreateButton).toBeDisabled()
    // Act
    await fireEvent.input(petNameInput, { target: { value: 'whatever' } })
    // Assert
    expect(petCreateButton).toBeEnabled()
  })
})
