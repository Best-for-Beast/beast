import { rest } from 'msw'

import PETS from './data/pets'

export const handlers = [
  rest.get('http://localhost:5000/api/pets', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(PETS))
  }),
]
