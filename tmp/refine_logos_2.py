
import os
import shutil
from PIL import Image

src_dir = r"c:\Users\Lucas\OneDrive\Documentos\Projetos\Lidtek-Site\client\src\logos"
dest_dir = r"c:\Users\Lucas\OneDrive\Documentos\Projetos\Lidtek-Site\client\public\static\logos"

def process_svg(src_name, dest_name):
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if not os.path.exists(src_path):
        print(f"Not found: {src_path}")
        return
    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to replace white and other very light colors with #333333 so the CSS grayscale handles it well.
    replacements = [
        ('fill="white"', 'fill="#333333"'),
        ('fill="#FEFEFE"', 'fill="#333333"'),
        ('fill="#F5F5F5"', 'fill="#333333"'),
        ('fill="#FCFCFC"', 'fill="#333333"'),
        ('fill="#FBFBFB"', 'fill="#333333"'),
        ('fill="#FDFDFD"', 'fill="#333333"'),
        ('fill="#FFFFFF"', 'fill="#333333"'),
        ('fill="#ffffff"', 'fill="#333333"'),
        ('fill="#fff"', 'fill="#333333"'),
        ('fill="#FFF"', 'fill="#333333"'),
    ]
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed SVG: {dest_path}")

def process_png(src_name, dest_name):
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if not os.path.exists(src_path):
        print(f"Not found: {src_path}")
        return
    
    try:
        img = Image.open(src_path).convert("RGBA")
        datas = img.getdata()
        new_data = []
        # Remove white/light-gray background aggressively
        for item in datas:
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)
        
        # Darken to match the grayish style for transparency
        img = img.convert("RGBA")
        r, g, b, a = img.split()
        dark_gray = Image.new('RGB', img.size, (51, 51, 51))
        img = Image.composite(dark_gray.convert('RGBA'), img, a)
        
        img.save(dest_path, "PNG", optimize=True)
        print(f"Processed PNG: {dest_path}")
    except Exception as e:
        print(f"Error processing PNG {src_name}: {e}")

process_svg("porsche-rio-logo.svg", "porsche-rio.svg")
process_svg("casa-decor-logo.svg", "casa-decor.svg")
process_svg("v5partners.svg", "v5-partners.svg")
process_svg("clickey-svg.svg", "clickey.svg")
process_png("iogar-logo.png", "iogar.png")

print("Done processing specific logos.")
