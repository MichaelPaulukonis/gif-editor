import request from './request'
import { isBase64Image } from './shared'

export const bucketName = 'cloud-static-bq'

export function getHeaderSign(policy) {
  return request({
    url: '/upyun/sign',
    params: {
      policy,
      method: 'POST'
    }
  })
}

// 是否为远程图片
export function isRemoteImage(src) {
  return !(
    src.indexOf('blob:') !== -1 ||
    src.indexOf('http') !== -1 ||
    isBase64Image(src)
  )
}

// 获取图片信息
export function imageInfo(key) {
  if (!isRemoteImage(key)) return {}
  const info = key.split('.')[0].split('_')
  return {
    name: info[0],
    uid: info[1],
    width: +info[2],
    height: +info[3]
  }
}

export function setImg(key) {
  if (!isRemoteImage(key)) return key

  // ...

  return domain + '/' + key
}

export const domain = 'https://cdn.biaoqing233.com'
