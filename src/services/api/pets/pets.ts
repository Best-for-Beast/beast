import CONFIG from '../../../config'
import { get } from '../api-client'
import type { IGetPetsResult } from './interfaces'

export async function getPets(): Promise<IGetPetsResult> {
  return await get(`${CONFIG.apiURL}pets`)
}
