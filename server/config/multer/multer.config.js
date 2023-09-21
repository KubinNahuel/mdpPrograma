const path= require('path')
const multer= require('multer')

const multerStorage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, './uploads')
    },
    filename:(req,file,cb)=>{
        const ext = file.mimetype.split("/")[1]
        cb(null,`product-${file.fieldname}-${Date.now()}.${ext}`)
    }
})

const fileFilter=(req,file,cb)=>{
    const filetypes= /jpeg|jpg|png|gif/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype= filetypes.test(file.mimetype)
    if(extname && mimetype){
        return cb(null, true)
    }else{
        cb('error: images only')
    }
}

const uploadMulter= multer({
    storage: multerStorage,
    fileFilter: fileFilter
})

module.exports= uploadMulter

