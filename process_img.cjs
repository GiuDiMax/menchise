const sharp = require('sharp');

async function processImage() {
  try {
    const inputPath = 'raw/NZ6_3426.jpeg';
    const outputPath = 'public/images/main/NZ6_3426.webp';
    
    // Auto-rotate and save to buffer to ensure dimensions are updated
    const rotatedBuffer = await sharp(inputPath).rotate().toBuffer();
    const metadata = await sharp(rotatedBuffer).metadata();
    
    const size = Math.min(metadata.width, metadata.height);
    const left = Math.round((metadata.width - size) / 2);
    const top = 0;
    
    await sharp(rotatedBuffer)
      .extract({ left, top, width: size, height: size })
      .resize(800, 800)
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log('Successfully auto-rotated, cropped, resized, and converted to webp at', outputPath);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
