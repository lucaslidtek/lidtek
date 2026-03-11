
import os
import re
from PIL import Image, ImageOps

src_dir = r"c:\Users\Lucas\OneDrive\Documentos\Projetos\Lidtek-Site\client\src\logos"
dest_dir = r"c:\Users\Lucas\OneDrive\Documentos\Projetos\Lidtek-Site\client\public\static\logos"

def fix_png_transparency_and_color(filename, darken=False):
    src_path = os.path.join(src_dir, filename)
    # Replicate the previous naming convention
    dest_name = filename.replace("-logo", "").replace(" decor-png", "-decor").replace("-png", "").replace(".jpeg", ".png").replace(" ", "-")
    dest_path = os.path.join(dest_dir, dest_name)
    
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        return

    img = Image.open(src_path).convert("RGBA")
    
    # Process transparency (remove whites/near-whites)
    datas = img.getdata()
    new_data = []
    for item in datas:
        # If pixel is near white/light gray (threshold 230 is safe for Iogar)
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    
    if darken:
        # We only want to affect pixels that are NOT transparent
        r, g, b, a = img.split()
        dark_gray = Image.new('RGB', img.size, (51, 51, 51)) # #333333
        img = Image.composite(dark_gray.convert('RGBA'), img, a)
    
    img.save(dest_path, "PNG")
    print(f"Fixed and saved PNG: {dest_path}")

def fix_svg_color(filename):
    src_path = os.path.join(src_dir, filename)
    dest_name = filename.replace("-logo-svg", "").replace("-svg", "").replace(" ", "-")
    dest_path = os.path.join(dest_dir, dest_name)

    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        return

    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace white/near-white fills with dark gray
    # Common variations found in the files
    replacements = [
        ('fill="white"', 'fill="#333333"'),
        ('fill="#FEFEFE"', 'fill="#333333"'),
        ('fill="#F5F5F5"', 'fill="#333333"'),
        ('fill="#FCFCFC"', 'fill="#333333"'),
        ('fill="#FBFBFB"', 'fill="#333333"'),
        ('fill="#FDFDFD"', 'fill="#333333"'),
    ]
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed and saved SVG: {dest_path}")

# Fix Iogar (removes box background)
fix_png_transparency_and_color("iogar-logo.png")

# Fix Casa Decor (was white/invisible, now dark)
fix_png_transparency_and_color("casa decor-png.png", darken=True)

# Fix SVGs (were white/invisible, now dark)
fix_svg_color("clickey-svg.svg")
fix_svg_color("porsche-rio-svg.svg")
fix_svg_color("skep-logo-svg.svg")

print("Logo refinements complete.")
