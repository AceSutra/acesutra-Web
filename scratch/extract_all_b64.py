import re

# Read current src/App.tsx to extract the base64 assets
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

def get_b64(name):
    pattern = 'const ' + name + ' = "'
    pos = text.find(pattern)
    if pos == -1:
        raise ValueError(f"Could not find {name}")
    end = text.find('";', pos)
    return text[pos + len(pattern):end]

imgDental = get_b64('imgDental')
imgSalon = get_b64('imgSalon')
imgGym = get_b64('imgGym')
imgLogo = get_b64('imgLogo')

print(f"Extracted imgDental ({len(imgDental)}), imgSalon ({len(imgSalon)}), imgGym ({len(imgGym)}), imgLogo ({len(imgLogo)})")

# Read assets_wiro.ts to extract WIRO_OFFICE_IMG and WIRO_PEGASUS_IMG
with open('src/assets_wiro.ts', 'r', encoding='utf-8') as f:
    wiro_text = f.read()

def get_wiro_b64(name):
    pattern = 'export const ' + name + ' = "'
    pos = wiro_text.find(pattern)
    if pos == -1:
        raise ValueError(f"Could not find {name} in assets_wiro.ts")
    end = wiro_text.find('";', pos)
    return wiro_text[pos + len(pattern):end]

WIRO_OFFICE_IMG = get_wiro_b64('WIRO_OFFICE_IMG')
WIRO_PEGASUS_IMG = get_wiro_b64('WIRO_PEGASUS_IMG')

print(f"Extracted WIRO_OFFICE_IMG ({len(WIRO_OFFICE_IMG)}) and WIRO_PEGASUS_IMG ({len(WIRO_PEGASUS_IMG)})")

with open('scratch/app_template.py', 'w') as f:
    f.write("# ready")
print("Assets extracted successfully!")
