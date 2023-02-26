/* istanbul ignore file */
const { createCanvas, loadImage } = require('canvas');
exports.hex2rgba = (hex) => {
  hex = hex.replace('#', '')

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  return [
    r,
    g,
    b,
    255
  ]
}

exports.getImageDataFromImg = (imgElem) => {
  loadImage(imgElem).then((image) => {
    const { width, height } = image
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0)

    return context.getImageData(0, 0, width, height)

  })



}

exports.loadImage = (fileBlob) => {
  const imgElem = new Image()
  imgElem.src = fileBlob

  return onImageLoaded(imgElem)
}

exports.onImageLoaded = (imgElem) => {
  return new Promise((resolve, reject) => {
    imgElem.addEventListener('load', () => {
      resolve(imgElem)
    }, { once: true })

    imgElem.addEventListener('error', (err) => {
      reject(err)
    }, { once: true })
  })
}

exports.suggestedDownloadFilename = (filename) => {
  const extIndex = filename.split('/').pop().lastIndexOf('.')
  const postfix = '--with-background.png'

  if (extIndex === -1) {
    return `${filename}${postfix}`
  }

  return `${filename.substr(0, extIndex)}${postfix}`
}
