import multer from 'multer';
import path from 'path';

// Configure storage with destination and filename
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // Store files in 'uploads/' directory
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    // Save file with original name (or you can customize this)
    callback(null, file.originalname);
  }
});

// Create the multer upload middleware
const upload = multer({ storage });

export default upload;
