
import node_jq_ext from 'node-jq-ext'

export default function getLambdaFunction(jq_code) {
  return (event, context, callback) => {
    const jq = new node_jq_ext.Jq(jq_code)
    const inputJSON = JSON.stringify(event)
    let result = null;
    let err = null
    try {
      result = { 'result': jq.parse(inputJSON) }
    }
    catch(e) {
      err =  { 'error_message': e.message }
    }
    callback(err, result)
  }
}

