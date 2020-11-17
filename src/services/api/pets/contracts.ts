export enum Gender {
  Female = 'female',
  Male = 'male',
  Undefined = 'undefined',
}

export interface PetDto {
  id: string
  name: string
  gender: Gender
  dateOfBirthTimestamp?: number
  description?: string
  imageURL?: string
}
