import Test from './test.svelte'
import { render } from '@testing-library/svelte'
import fetch from 'jest-fetch-mock'
import { default as PETS } from '../../../mocks/data/pets'
import { tick } from 'svelte'

beforeEach(() => {
  fetch.resetMocks()
})

it('it works', async () => {
  fetch.mockResponseOnce(JSON.stringify(PETS))
  const sut = render(Test)
  // TODO WAIT FOR LOADING PETS
  console.log(sut.container.innerHTML)
  expect(1).toBe(1)
})

it('it works2', async () => {
  fetch.mockResponseOnce(JSON.stringify(PETS))
  const sut = render(Test)
  // TODO WAIT FOR LOADING PETS
  await tick()
  console.log(sut.container.innerHTML)
  expect(1).toBe(1)
})
