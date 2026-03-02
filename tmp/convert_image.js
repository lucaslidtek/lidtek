import sharp from 'sharp';
import path from 'path';

const inputPath = 'c:\\Users\\Lucas\\Downloads\\Lidtek-Site\\client\\public\\static\\images\\pawel-czerwinski-uA6x_MXI_fE-unsplash_1771968246269.jpg';
const outputPath = 'c:\\Users\\Lucas\\Downloads\\Lidtek-Site\\client\\public\\static\\images\\hero-background.webp';

sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log('Successfully converted image to WebP'))
    .catch(err => console.error('Error during conversion:', err));
