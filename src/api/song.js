import{ commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'     //后端代理 在devServer 创建一个apiRouter

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => { 
    return Promise.resolve(res.data)
    }
  )
}