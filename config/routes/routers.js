var router = require("express").Router();
var path = require("path");
var multer      = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'..','..','uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, new Date(Date.now()).getDay() +'-'+ new Date(Date.now()).getMonth()+'-'+new Date(Date.now()).getFullYear()+'-'+file.originalname);
  }
});

var upload = multer({ storage: storage });
module.exports = () =>{
    
    router.get('/', (req, res)=> {
        res.sendFile(path.join(__dirname,'..','..','views','index.html'));
    });
     router.post('/api/upload', upload.single('photo'),(req, res)=> {
        res.json({"size":req.file.size});
    });
    return router;
};