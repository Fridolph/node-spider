let p1 = new Promise((resolve, reject) => {
  process.nextTick(() => {
    console.log(1)
    resolve('done')
  })
})

setImmediate(() => {
  console.log(2)
})

setTimeout(() => {
  console.log(3)
}, 0)

p1.then(r => {
  console.log(4)
})