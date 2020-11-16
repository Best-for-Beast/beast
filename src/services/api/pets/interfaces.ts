export enum Gender {
  Female = 'female',
  Male = 'male',
  Undefined = 'undefined',
}

export interface IPetResultBody {
  id: string
  name: string
  gender: Gender
  dateOfBirthTimestamp?: number
  description?: string
  imageURL?: string
}

export interface IGetPetsResult {
  pets: IPetResultBody[]
}
