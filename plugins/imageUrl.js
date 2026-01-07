/**
 * Plugin untuk mendapatkan base URL gambar berdasarkan environment
 * Development: http://localhost:3001/image/
 * Production: https://back-api.nikkisuper.my.id/image/
 */
export default ({ app }, inject) => {
  const getImageUrl = (imageName) => {
    if (!imageName) return ''
    
    const baseURL = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3001/image/' 
      : 'https://back-api.nikkisuper.my.id/image/'
    
    return baseURL + imageName
  }
  
  // Inject sebagai $imageUrl helper
  inject('imageUrl', getImageUrl)
  
  // Juga inject sebagai method di app
  app.$imageUrl = getImageUrl
}

