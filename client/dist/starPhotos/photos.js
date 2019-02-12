const photos = [
  "../dist/starPhotos/Dstar.png", 
  "../dist/starPhotos/onestar.png", 
  "../dist/starPhotos/twostar.png", 
  "../dist/starPhotos/threestar.png", 
  "../dist/starPhotos/fourstar.png", 
  "../dist/starPhotos/fivestar.png"
]

export default photos;

//When using Webpack you need to require images in order for Webpack to process them,
// which would explain why external images load while internal do not, 
// so instead of <img src={"/images/resto.png"} /> you need to 
// use <img src={require('/images/image-name.png')} /> replacing image-name.png with the correct image name for each of them. 
// That way Webpack is able to process and replace the source img.