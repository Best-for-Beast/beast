import { worker } from '../src/mocks/node'
import 'jest-fetch-mock'

beforeAll(() => worker.listen())
// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => worker.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => worker.close())
