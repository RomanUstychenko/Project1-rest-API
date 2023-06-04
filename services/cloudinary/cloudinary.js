const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

dotenv.config();


// Configuration 
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
};

exports.createImageUrl = async (publicId, w, h) => {

    const imageTag = cloudinary.url(publicId, {
      transformation: [
        { width: w, height: h, gravity: "auto", crop: "fill"},
        ],
        secure: true,
    });
    

    return imageTag;
};