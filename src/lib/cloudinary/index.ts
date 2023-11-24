import cloudinary from 'cloudinary'

import { cloudinaryAPI, cloudinaryKEY } from '~/graphql/constants'

cloudinary.v2.config({
  cloud_name: 'mstqmarfn',
  api_key: cloudinaryAPI,
  api_secret: cloudinaryKEY,
  secure: true,
})

export default cloudinary
