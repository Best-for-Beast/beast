import '@testing-library/jest-dom'
import { format, subMonths } from 'date-fns'
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
  getByText,
  queryByTestId,
} from '@testing-library/svelte'
import { DOM_TEST_IDS } from '../tests-identifiers'
import PetList from '../routes/dashboard/pet-list/PetList.svelte'
import { PET_ID } from '../mocks/data/pets'

describe('As a Pet Owner I want to add new pet so I can see it among rest of my pets.', () => {
  it(`
  GIVEN pet list 
  WHEN Pet Owner enters the list 
  THEN no form for adding pet is availible`, () => {
    // Arrange + Act
    const sut = render(PetList)
    // Assert
    expect(
      queryByTestId(sut.container, DOM_TEST_IDS.petCreateForm)
    ).not.toBeInTheDocument()
  })

  it(`
  GIVEN pet list 
  WHEN Pet Owner clicks add new pet 
  THEN A create pet form with fields: <Name> required, <Type> required, <Breed>, <Birthdate>, <Gender>, <Description>, <Photo> is added to pet list`, async () => {
    // Arrange
    const sut = render(PetList)
    const addButton = sut.getByTestId(DOM_TEST_IDS.addPetButton)
    // Act
    await fireEvent.click(addButton)
    // Assert
    await waitFor(() => sut.getByTestId(DOM_TEST_IDS.petCreateForm))
    const createPetForm = sut.getByTestId(DOM_TEST_IDS.petCreateForm)
    expect(getByTestId(createPetForm, DOM_TEST_IDS.petName)).toBeInTheDocument()
    expect(getByTestId(createPetForm, DOM_TEST_IDS.petName)).toHaveAttribute(
      'required'
    )
    expect(getByTestId(createPetForm, DOM_TEST_IDS.petType)).toBeInTheDocument()
    expect(getByTestId(createPetForm, DOM_TEST_IDS.petType)).toHaveAttribute(
      'required'
    )
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petBreed)
    ).toBeInTheDocument()
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petBirthdate)
    ).toBeInTheDocument()
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petGender)
    ).toBeInTheDocument()
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petDescription)
    ).toBeInTheDocument()
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petPhoto)
    ).toBeInTheDocument()
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petCreateButton)
    ).toBeInTheDocument()
    expect(
      getByTestId(createPetForm, DOM_TEST_IDS.petCancelButton)
    ).toBeInTheDocument()
  })

  it(`
  GIVEN form <Name>, <Birthdate>, <Gender>, <Description> 
  WHEN Pet Owner creates pet 
  THEN pet can be found in the pet list`, async () => {
    // Arrange
    const sut = render(PetList)
    const ageInMonths = 9
    const birthdate = format(subMonths(new Date(), ageInMonths), 'yyyy-MM-dd')
    await fireEvent.click(sut.getByTestId(DOM_TEST_IDS.addPetButton))
    const createPetForm = sut.getByTestId(DOM_TEST_IDS.petCreateForm)
    await fireEvent.input(getByTestId(sut.container, DOM_TEST_IDS.petName), {
      target: { value: 'Izaura' },
    })
    await fireEvent.change(getByTestId(sut.container, DOM_TEST_IDS.petGender), {
      target: { value: 'female' },
    })
    await fireEvent.input(
      getByTestId(sut.container, DOM_TEST_IDS.petDescription),
      {
        target: { value: 'Description of Izaura' },
      }
    )
    await fireEvent.input(
      getByTestId(sut.container, DOM_TEST_IDS.petBirthdate),
      {
        target: { value: birthdate },
      }
    )
    // Act
    await fireEvent.click(
      getByTestId(createPetForm, DOM_TEST_IDS.petCreateButton)
    )
    await waitFor(() => sut.getByTestId(DOM_TEST_IDS.createPetCardItem(PET_ID)))
    // Assert
    const addedPet = sut.getByTestId(DOM_TEST_IDS.createPetCardItem(PET_ID))
    expect(addedPet).toHaveTextContent('Izaura')
    expect(
      getByTestId(addedPet, DOM_TEST_IDS.petFemaleIcon)
    ).toBeInTheDocument()
    expect(addedPet).toHaveTextContent('Description of Izaura')
    expect(
      getByText(addedPet, `${ageInMonths} months`, { exact: false })
    ).toBeDefined()
  })
})
