from PIL import Image
import base64
import os

for name in ['acesutra_office_pune', 'wiro_pegasus']:
    im = Image.open('public/' + name + '.jpg')
    im.thumbnail((1920, 1080), Image.Resampling.LANCZOS)
    webp_path = 'public/' + name + '.webp'
    im.save(webp_path, 'WEBP', quality=85)
    print('Saved ' + webp_path)

with open('public/acesutra_office_pune.webp', 'rb') as f:
    b64_office = base64.b64encode(f.read()).decode('utf-8')
with open('public/wiro_pegasus.webp', 'rb') as f:
    b64_pegasus = base64.b64encode(f.read()).decode('utf-8')

with open('src/assets_wiro.ts', 'w', encoding='utf-8') as f:
    f.write('// Exact extracted and refined Wiro.ae imagery with Pune localization\n')
    f.write('export const WIRO_OFFICE_IMG = "data:image/webp;base64,' + b64_office + '";\n')
    f.write('export const WIRO_PEGASUS_IMG = "data:image/webp;base64,' + b64_pegasus + '";\n')

print('src/assets_wiro.ts generated successfully!')
