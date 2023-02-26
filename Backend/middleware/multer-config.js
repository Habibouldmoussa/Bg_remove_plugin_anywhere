// Importation des models et des plugin nécessaire 
const multer = require('multer');
// On liste les types d'images accepter 
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
};

//------------------------------------------------
// La fonction de filtrage des images interdit les autre type de fichier potentielement dangeureux  
const filterImage = (req, file, callback) => {
    if (MIME_TYPES[file.mimetype] !== undefined) {
        return callback(null, true);
    }
    console.log(file)
    callback(null, false);
};
/* Si l'image est correct on sauvgrde cette derniere dans notre dossier images  
* ne pas ometre de placer une image par defaut appelé default.png dans le cas contraire 
*/
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');

    },
    filename: (req, file, callback) => {
        const nameEncode = Buffer.from(file.originalname, 'latin1').toString('utf8')
        const name = nameEncode.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage, fileFilter: filterImage }).single('image');