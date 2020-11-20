import PetList from '../routes/dashboard/pet-list/PetList.svelte'
import { PET_TO_CREATE } from '../mocks/data/pets'
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

  it('GIVEN form <Name>, <Type>, <Breed>, <Birthdate>, <Gender>, <Description> WHEN pet owner creates pet THEN pet can be found in the pet list', async () => {
    // Arrange
    const sut = render(PetList)
    await fireEvent.click(sut.getByTestId('add-pet-button'))
    const addPetItem = sut.getByTestId(petFormTestId)
    await fireEvent.input(getByTestId(sut.container, 'pet-name'), {
      target: { value: PET_TO_CREATE.name },
    })
    // Act
    await fireEvent.click(getByTestId(addPetItem, 'pet-create-button'))
    await waitFor(() => sut.getByTestId(`pet-item-${PET_TO_CREATE.id}`))
    // Assert
    const addedPet = sut.getByTestId(`pet-item-${PET_TO_CREATE.id}`)
    expect(addedPet).toHaveTextContent(PET_TO_CREATE.name)
    throw '↑ works, finish: <Type>, <Breed>, <Birthdate>, <Gender>, <Description> '
  })
})
