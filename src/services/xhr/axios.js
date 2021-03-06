import axios from 'axios'
import router from '@/routes/'

const rootPath = '/api' // 后端 API 根路径

const xhr = ({ method = 'get', url, body = null }) => {

  const queryString = data => {
    let str = ''
    const body = typeof data === 'object' ? data : {}
    Object.keys(body || {}).forEach((key, index) => {
      str += (index === 0 ? '?' : '&') + key + '=' + body[key]
    })
    return str
  }

  const promise = new Promise((resolve, reject) => {
    const reqPath = rootPath + url + (method === 'get' ? queryString(body) : '')
    axios({
      method: method,
      url: reqPath,
      data: body
    }).then(res => {
      const data = res.data
      if (data.result === 3) {
        return router.push({ name: 'login' })
      } else if (data.result) {
        const errorInfo = data.errorInfo || '处理错误'
        return reject(errorInfo)
      }
      resolve(data || {})
    }).catch(() => {
      // console.error('request error: %s', err)
      reject('请求失败')
    })
  })

  return promise
}

export default xhr
