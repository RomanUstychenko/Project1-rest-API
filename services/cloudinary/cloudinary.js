// const cloudinary = require('cloudinary');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

dotenv.config();

// Configuration 
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

exports.uploads = async (file, folder) => {
  try {
      const result = await cloudinary.uploader.upload(file, {
          resource_type: "auto",
          folder: folder
      });
      return {
          url: result.url,
          id: result.public_id
      };
  } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
  }
};

exports.createImageUrl = (publicId, w, h) => {
  return cloudinary.url(publicId, {
      transformation: [
          { width: w, height: h, gravity: "auto", crop: "fill" },
      ],
      secure: true,
  });
};


exports.deleteImage = async (req, res) => {

    let publicId = req.body.public_id; 

  cloudinary.uploader.destroy(publicId, (error, result) => {
    if (error) {
      console.error('Error deleting image:', error); // Вивід помилки в консоль
      return res.status(500).json({ error: 'Failed to delete image' });
    }
    
    // Перевірка результату
    if (result.result === 'not found') {
      console.warn('Image not found:', publicId); // Зображення не знайдено
      return res.status(404).json({ message: 'Image not found' });
    }

    if (result.result === 'ok') {
      console.log('Image deleted successfully:', result);
      return res.status(200).json({ message: 'Image deleted successfully' });
    }

    // На випадок непередбаченого результату
    console.warn('Unexpected result:', result);
    return res.status(500).json({ error: 'Unexpected result', result });
  });

  };