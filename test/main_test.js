import assert from 'power-assert'
import jq_lambda from '../dist/index'

describe('lambda', () => {
  it('success', (done) => {
    const lambda = jq_lambda('.')
    lambda({"aa":1}, {}, (err, result) => {
      assert.deepEqual(result, { "result": ['{"aa":1}'] })
      done()
    })
  })
  it('error', (done) => {
    const lambda = jq_lambda('hoge')
    lambda({"aa":1}, {}, (err, result) => {
      assert(err !== null)
      done()
    })
  })
})

