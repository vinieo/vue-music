var express = require('express')
var config = require('./config/index')
var axios = require('axios')

const app = express()
const apiRoutes = express.Router()

app.use('/api', apiRoutes)

apiRoutes.get('/api/lyric', function (req, res) {
    const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';   //这里是要链接的api地址
    axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',    //配置api地址referer
        host: 'c.y.qq.com'    //配置api地址host
      },
      params: req.query  //这是请求的query 
    }).then((response) => {
      var ret = response.data
      if (typeof ret === 'string') {
        var reg = /^\w+\(({[^()]+})\)$/
        var matches = ret.match(reg)
        if (matches) {
          ret = JSON.parse(matches[1])
        }
      }
      //response是api地址返回的，数据在data里。
      res.json(ret)
    }).catch((e) => {
      console.log(e);
    })
})
apiRoutes.get('/api/getSongList', function (req, res) {
    const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';   //这里是要链接的api地址
    axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',    //配置api地址referer
        host: 'c.y.qq.com'    //配置api地址host
      },
      params: req.query  //这是请求的query 
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e);
    })
})
apiRoutes.get('/api/search', function (req, res) {
    const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp';   //这里是要链接的api地址
    axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',    //配置api地址referer
        host: 'c.y.qq.com'    //配置api地址host
      },
      params: req.query  //这是请求的query 
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e);
    })
})

app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function (err) {
    if(err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})
