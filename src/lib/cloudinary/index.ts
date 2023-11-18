import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: 'mstqmarfn',
  api_key: '742773636552889',
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default cloudinary
