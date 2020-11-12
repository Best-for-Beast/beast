import { advanceTo, clear } from 'jest-date-mock'
import { getTime } from 'date-fns'
import { pl } from 'date-fns/locale'

import { formatPetAge } from './helpers'

describe('formatPetAge', () => {
  const petDateOfBirthTimestamp = getTime(new Date(2020, 0, 1))
  beforeEach(clear)

  it('should return `1 year` for exactly on year of age', () => {
    advanceTo(new Date(2021, 0, 1))
    expect(formatPetAge(petDateOfBirthTimestamp)).toEqual('1 year')
  })

  it('should return `11 months` for just under a year of age', () => {
    advanceTo(new Date(2020, 11, 31))
    expect(formatPetAge(petDateOfBirthTimestamp)).toEqual('11 months')
  })

  it('should return `1 year` for just over a year of age', () => {
    advanceTo(new Date(2021, 0, 2))
    expect(formatPetAge(petDateOfBirthTimestamp)).toEqual('1 year')
  })

  it('should return `1 year 1 month` for the case of crossing the 13 months lifespan', () => {
    advanceTo(new Date(2021, 1, 1))
    expect(formatPetAge(petDateOfBirthTimestamp)).toEqual('1 year 1 month')
  })

  it('should respect `locale` passed in options', () => {
    advanceTo(new Date(2022, 5, 1))
    expect(formatPetAge(petDateOfBirthTimestamp, { locale: pl })).toEqual(
      '2 lata 5 miesięcy'
    )
  })
})
