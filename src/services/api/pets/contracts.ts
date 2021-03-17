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

export enum HealthRecordType {
  MedicalResults = 'Medical test results',
  Vaccinations = 'Vaccinations',
  Diseases = 'Diseases',
  Deworming = 'deworming',
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
  gender: Gender
  dateOfBirthTimestamp?: number
  description: string
  imageURL?: string
}

export interface HealthRecordDto {
  type: HealthRecordType
  title: string
  description: string
  occuredOnTimestamp: number
  attachments: string[]
}

export interface PetHealthDto {
  pet: PetDto
  healthRecords: HealthRecordDto[]
}
