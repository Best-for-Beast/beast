import { get, post } from '../api-client'
import type { CreatePetDto, PetDto, PetHealthDto } from './contracts'

export const getPets = () => get<PetDto[]>('http://localhost:5001/api/pets')

export const postPet = (newPet: CreatePetDto): Promise<void> =>
  post('http://localhost:5001/api/pets', newPet)

export const getPet = (id: string) =>
  get<PetHealthDto>(`http://localhost:5001/api/pets/${id}`)
