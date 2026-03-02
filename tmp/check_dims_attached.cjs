const sharp = require('sharp');
sharp('C:/Users/Lucas/Downloads/Lidtek-Site/attached_assets/pawel-czerwinski-uA6x_MXI_fE-unsplash_1771968246269.jpg')
    .metadata()
    .then(metadata => {
        console.log(`Width: ${metadata.width}`);
        console.log(`Height: ${metadata.height}`);
    });
