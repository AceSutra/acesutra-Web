import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

for var in ['imgDental', 'imgSalon', 'imgGym', 'imgLogo']:
    pattern = 'const ' + var + ' = "'
    pos = text.find(pattern)
    if pos != -1:
        end_pos = text.find('";', pos)
        val = text[pos + len(pattern):end_pos]
        print(f"{var} found: length {len(val)}, starts with {val[:30]}")
    else:
        print(f"{var} NOT found")
