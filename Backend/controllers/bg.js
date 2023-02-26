const fs = require('fs');
const BackgroundRemoval = require('../component/background-removal/background-removal');
const tf = require('@tensorflow/tfjs');
const { getImageDataFromImg } = require('../utils');
const state = require('../settings/state');
const { setWasmPath } = require('@tensorflow/tfjs-backend-wasm');
tf.enableProdMode()
tf.setBackend('wasm')
const bgRemovalInstance = new BackgroundRemoval();
bgRemovalInstance.loadModel();
let imageData
exports.uploadImage = async (req, res, next) => {
    let filename = (req.file != undefined) ? req.file.filename : 'default.png';
    let imgElem = `${req.protocol}://${req.get('host')}/images/${filename}`;
    imageData = getImageDataFromImg(imgElem)
    console.log(imageData);
    bgRemovalInstance.remove
        (imageData, state.state)
        .then(imgOutputElem => res.status(200).json(imgOutputElem))
        .catch(error => res.status(400).json({ error: error }))

};