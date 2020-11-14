import { get } from '../api-client'
import type { IGetPetsResult } from './interfaces'

export async function getPets(): Promise<IGetPetsResult> {
  return await get('api/pets')
}
