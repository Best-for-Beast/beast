import { get, post } from '../api-client'
import type { CreatePetDto, PetDto } from './contracts'

export const getPets = (): Promise<PetDto[]> =>
  get('http://localhost:5000/api/pets')

export const postPet = (newPet: CreatePetDto): Promise<void> =>
  post('http://localhost:5000/api/pets', newPet)
