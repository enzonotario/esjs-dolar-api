import { handle } from 'hono/vercel'
import { app } from '../dist/servidor/api.js'

export const config = {
  runtime: 'edge',
}

export default handle(app)
