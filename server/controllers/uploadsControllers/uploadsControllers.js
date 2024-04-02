// uploadController.js
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}../../../public/avatars`);
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage });

function uploadAvatar(req, res) {
  res.json({
    message: 'avatar uploaded successfully',
    fileName: req.file.filename,
  });
}

module.exports = {
  upload,
  uploadAvatar,
};
