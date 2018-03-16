const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const {promisify} = require('util')
const {writeFile} = require('fs')
let writeFileAsync = promisify(writeFile)
// 要爬的地址
const URL = 'http://www.dilidili.wang/anime/201801/'

// 辅助方法
function trimText(str) {
  return String(str)
    .replace(/\n/g, '')
    .replace(/\s/g, '')
}

async function spider(urladdr) {
  console.log(`开始爬 ------- ${URL}`)
  const res = await axios.get(urladdr)
  const html = res.data
  const $ = cheerio.load(html)
  // 爬取逻辑
  const result = []

  const ul = $('.aside_cen2 .con24')
    .eq(0)
    .find('dl')

  ul.each((i, elem) => {
    let e = $(elem)

    let imgsrc = e.find('dt img').attr('src')
    let title = e.find('h3').text()
    let time = e
      .find('.d_label')
      .eq(1)
      .text()
      .substr(3)
    let type = e
      .find('.d_label')
      .eq(2)
      .text()
      .substr(3)
    let desc = ''
    let paras = e.find('p')
    paras.each((i, e) => {
      let _this = $(e)
      desc += trimText(_this.text())
    })

    if (!imgsrc && !title && !time && !type && !desc) return

    result.push({
      imgsrc,
      title,
      time,
      type,
      desc
    })
  })

  // console.log('================ result ================\n', result)
  return Promise.resolve(result)
}

async function writeToFile(obj) {
  let write = await writeFileAsync(__dirname + '/dilidili.json', JSON.stringify(obj))
}


spider(URL).then(r => {
  writeToFile(r)
  console.log(' ------------------- 爬取 and 写入完毕 ------------------- ')
})