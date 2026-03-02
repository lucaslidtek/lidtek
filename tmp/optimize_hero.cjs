const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:/Users/Lucas/Downloads/Lidtek-Site/attached_assets/pawel-czerwinski-uA6x_MXI_fE-unsplash_1771968246269.jpg';
const outputDir = 'C:/Users/Lucas/Downloads/Lidtek-Site/client/public/static/images';

async function optimizeImages() {
    // Desktop version (1920px)
    await sharp(inputPath)
        .resize(1920)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, 'hero-background.webp'));

    // Mobile version (800px)
    await sharp(inputPath)
        .resize(800)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, 'hero-background-mobile.webp'));

    console.log('Images optimized and resized.');
}

optimizeImages().catch(console.error);
