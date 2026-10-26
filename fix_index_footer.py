with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Direct replacement of the class attribute only
old = 'class="w-12 h-12 object-contain"'
new = 'class="w-12 h-12 object-contain header-logo-img"'

# Count occurrences
count = content.count(old)
print(f'Found {count} occurrences of class="{old[1:-1]}"')

# Replace only the 2nd occurrence (1st is header, 2nd is footer)
if count >= 2:
    idx = content.find(old)
    idx2 = content.find(old, idx + 1)
    content = content[:idx2] + new + content[idx2 + len(old):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS - replaced 2nd occurrence (footer)')
else:
    print(f'Only {count} found - cannot reliably determine which is footer')
    # Just replace all but keep track
    parts = content.split(old)
    if len(parts) >= 2:
        # Keep first as-is, replace second
        content = parts[0] + parts[1] + new
        for i in range(2, len(parts)):
            content += parts[i]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print('SUCCESS (split method)')
