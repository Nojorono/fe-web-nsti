/**
 * Plugin untuk mendapatkan base URL gambar berdasarkan environment
 * Development: http://localhost:3000/image/
 * Production: Menggunakan IMAGE_BASE_URL dari .env atau fallback ke default
 */
export default ({ app }, inject) => {
  const getImageUrl = (imageName) => {
    if (!imageName) return ''
    
    // Use environment variable if available, otherwise fallback to defaults
    const baseURL = process.env.IMAGE_BASE_URL || 
      (process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3000/image/' 
        : 'https://back-api.nikkisuper.my.id/image/')
    
    return baseURL + imageName
  }
  
  // Inject sebagai $imageUrl helper
  inject('imageUrl', getImageUrl)
  
  // Juga inject sebagai method di app
  app.$imageUrl = getImageUrl
}

