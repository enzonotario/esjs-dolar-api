import { describe, expect, it } from 'vitest'
import { cronExchanges } from '@/ar/comandos/exchanges.cron.esjs'

describe('exchanges.cron', () => {
  it('cronExchanges', async () => {
    const result = await cronExchanges()

    expect(result).toMatchSnapshot()
  })
})
