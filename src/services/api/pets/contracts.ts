export enum Gender {
  Female = 'female',
  Male = 'male',
  Undefined = 'undefined',
}

export enum PetType {
  Cat = 'cat',
  Dog = 'dog',
  Horse = 'horse',
  Undefined = 'undefined',
}

export interface CreatePetDto {
  name: string
  type: PetType
  breed: string
  gender: Gender
  dateOfBirthTimestamp: number
  description: string
  imageURL?: string
}

export interface PetDto {
  id: string
  name: string
  type: PetType
  breed: string
  gender: Gender
  dateOfBirthTimestamp?: number
  description: string
  imageURL?: string
}
