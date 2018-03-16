const axios = require('axios')
const cheerio = require('cheerio')
const url = require('url')
const URL = 'http://bangumi.tv/anime/browser/tv/airtime/2018'
const hostname = url.parse(URL).hostname

// 辅助方法
function trimText(str) {  
  return String(str).replace(/\n/g, "").replace(/\s/g, "")
}

// 任务方法
async function task() {
  const res = await axios.get(URL)
  const html = res.data
  const $ = cheerio.load(html)

  // const titleCon = $('.article .title').text()
  const ul = $('#browserItemList .item')
  
  let data = []
  
  ul.each((i, el) => {
    let _this = $(el)

    let img = _this.find('.subjectCover .image > img').attr('src') || ''
    let subTitle = _this.find('.inner .small') ? '(' + trimText(_this.find('.inner .small')) + ')' : ''
    let title = trimText(_this.find('.inner > h3 > a').text()) + subTitle
    let info = trimText(_this.find('.inner .info').text())
    let href = hostname + '/' + _this.find('.subjectCover').attr('href')
    
    data.push({
      title,
      img,
      info,
      href
    })
  })

  console.log('============ data ==========\n', data)
}

// 执行
task()