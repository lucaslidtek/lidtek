const sharp = require('sharp');
sharp('c:/Users/Lucas/Downloads/Lidtek-Site/public/static/images/pawel-czerwinski-uA6x_MXI_fE-unsplash_1771968246269.jpg')
    .metadata()
    .then(metadata => {
        console.log(`Width: ${metadata.width}`);
        console.log(`Height: ${metadata.height}`);
    });
