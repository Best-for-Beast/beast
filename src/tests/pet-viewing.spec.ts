import {
  render,
  waitFor,
  fireEvent,
  screen,
  getByText,
} from '@testing-library/svelte'
import { PETS } from '../mocks/data/pets'
import App from '../App.svelte'
import { DOM_TEST_IDS } from '../tests-identifiers'

describe('As a Pet Owner I want to see my pet so that I can check if my pet needs appointment with VET', () => {
  it(`
  WHEN pet is viewed
  THEN health records are listed
  `, async () => {
    // Arrange

    await waitFor(() => sut.getAllByTestId('pet-item', { exact: false }))
    const petItem = sut.getByTestId(DOM_TEST_IDS.createPetCardItem(PETS[0].id))
    const detailsLint = getByText(petItem, 'Details')
    // Act
    await fireEvent.click(detailsLint)
    // Assert

    expect(screen.getByText('Page not found')).toBeDefined()
  })
})
