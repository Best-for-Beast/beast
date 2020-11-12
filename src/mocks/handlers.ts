import { rest } from 'msw'
import CONFIG from '../config'

import PETS from './data/pets'
export const handlers = [
  rest.get(`${CONFIG.apiURL}pets`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        pets: PETS,
      })
    )
  }),
]
