
import os
from PIL import Image
import shutil

src_dir = r"c:\Users\Lucas\OneDrive\Documentos\Projetos\Lidtek-Site\client\src\logos"
dest_dir = r"c:\Users\Lucas\OneDrive\Documentos\Projetos\Lidtek-Site\client\public\static\logos"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

logos_mapping = {
    "ago-logo.webp": "ago.webp",
    "aluga-aqui-logo.jpg": "aluga-aqui.png",
    "casa decor-png.png": "casa-decor.png",
    "clickey-svg.svg": "clickey.svg",
    "fazenda-sao-bento-png.jpeg": "fazenda-sao-bento.png",
    "gqb-consultoria-png.png": "gqb-consultoria.png",
    "iogar-logo.png": "iogar.png",
    "locacoes-sao-bento-png.jpeg": "locacoes-sao-bento.png",
    "logo-italiana-png.png": "logo-italiana.png",
    "porsche-rio-svg.svg": "porsche-rio.svg",
    "skep-logo-svg.svg": "skep.svg",
    "v5 partners-png.png": "v5-partners.png",
}

def make_transparent(img):
    img = img.convert("RGBA")
    datas = img.getdata()
    new_data = []
    # Identify near-white pixels and make them transparent
    for item in datas:
        # If pixel is near white (above 240, 240, 240)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img

def optimize_image(src_path, dest_path):
    if src_path.endswith('.svg'):
        shutil.copy2(src_path, dest_path)
        print(f"Copied SVG: {dest_path}")
        return

    try:
        img = Image.open(src_path)
        
        # Check if it needs transparency (if it's not already RGBA or if user wants white removed)
        # For now, let's always try to remove white backgrounds from logos unless they are already transparent
        if img.mode != 'RGBA':
            img = make_transparent(img)
        
        # Resize if too large (max 400px)
        max_size = 400
        if max(img.size) > max_size:
            ratio = max_size / max(img.size)
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f"Resized {src_path} to {new_size}")

        img.save(dest_path, "PNG", optimize=True)
        print(f"Optimized and saved: {dest_path}")
    except Exception as e:
        print(f"Error processing {src_path}: {e}")

for src_name, dest_name in logos_mapping.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        optimize_image(src_path, dest_path)
    else:
        print(f"Source file not found: {src_path}")

print("Logo optimization complete.")
