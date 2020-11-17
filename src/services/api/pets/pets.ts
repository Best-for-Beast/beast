import { get } from '../api-client'
import type { PetDto } from './contracts'

export const getPets = async (): Promise<PetDto[]> => get('api/pets')
