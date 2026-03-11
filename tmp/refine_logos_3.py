
import os

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

process_svg("locacoes-sao-bento.svg", "locacoes-sao-bento.svg")
process_svg("fazenda-sao-bento.svg", "fazenda-sao-bento.svg")

print("São Bento logos processed.")
