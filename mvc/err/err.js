async function foo() {
  await bar()
    .catch(e => {
      console.log('bar caught err')
      throw e
    })
}

async function bar() {
  throw new Error('async function bar !!! got wrong')
}

foo()
  .catch(e => {
    console.log('foo caught error')
  })

let response = {
  code: 400001,
  msg: 'invalid credential'
}