import PetList from '../routes/dashboard/pet-list/PetList.svelte'
import { IdForPet } from '../mocks/data/pets'
import { format, addMonths } from 'date-fns'
import '@testing-library/jest-dom'
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
  getByText,
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

  it('GIVEN pet list WHEN pet owner clicks add new pet THEN A tile with editable form with fields: <Name> required, <Type> required, <Breed>, <Birthdate>, <Gender>, <Description>, <Photo> is added to pet list', async () => {
    // Arrange
    const sut = render(PetList)
    const addButton = sut.getByTestId('add-pet-button')
    // Act
    await fireEvent.click(addButton)
    // Assert
    await waitFor(() => sut.getByTestId(petFormTestId))
    const addPetItem = sut.getByTestId(petFormTestId)
    expect(getByTestId(addPetItem, 'pet-name')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-name')).toHaveAttribute('required')
    expect(getByTestId(addPetItem, 'pet-type')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-type')).toHaveAttribute('required')
    expect(getByTestId(addPetItem, 'pet-breed')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-birthdate')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-gender')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-description')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-photo')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-create-button')).toBeInTheDocument()
    expect(getByTestId(addPetItem, 'pet-cancel-button')).toBeInTheDocument()
  })

  it('GIVEN form <Name>, <Birthdate>, <Gender>, <Description> WHEN pet owner creates pet THEN pet can be found in the pet list', async () => {
    // Arrange
    const sut = render(PetList)
    const ageInMonths = 9
    const birthdate = format(addMonths(new Date(), -ageInMonths), 'yyyy-MM-dd')
    await fireEvent.click(sut.getByTestId('add-pet-button'))
    const addPetItem = sut.getByTestId(petFormTestId)
    await fireEvent.input(getByTestId(sut.container, 'pet-name'), {
      target: { value: 'Izaura' },
    })
    await fireEvent.change(getByTestId(sut.container, 'pet-gender'), {
      target: { value: 'female' },
    })
    await fireEvent.input(getByTestId(sut.container, 'pet-description'), {
      target: { value: 'Description of Izaura' },
    })
    await fireEvent.input(getByTestId(sut.container, 'pet-birthdate'), {
      target: { value: birthdate },
    })
    // Act
    await fireEvent.click(getByTestId(addPetItem, 'pet-create-button'))
    await waitFor(() => sut.getByTestId(`pet-item-${IdForPet}`))
    // Assert
    const addedPet = sut.getByTestId(`pet-item-${IdForPet}`)
    expect(addedPet).toHaveTextContent('Izaura')
    expect(getByTestId(addedPet, `female.svg`)).toBeInTheDocument()
    expect(addedPet).toHaveTextContent('Description of Izaura')
    expect(
      getByText(addedPet, `${ageInMonths} months`, { exact: false })
    ).toBeDefined()
  })
})
