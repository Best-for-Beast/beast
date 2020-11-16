import {
  differenceInMonths,
  differenceInYears,
  formatDuration,
  Locale,
} from 'date-fns'

interface IGetPetAgeOptions {
  locale: Locale | undefined
}

export function formatPetAge(
  dateOfBirthTimestamp: number,
  options?: IGetPetAgeOptions
): string {
  const now = new Date()
  const years = differenceInYears(now, dateOfBirthTimestamp)
  const months = differenceInMonths(now, dateOfBirthTimestamp) % 12

  return formatDuration({ years, months }, options)
}
