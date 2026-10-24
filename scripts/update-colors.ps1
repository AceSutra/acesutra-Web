$srcDir = "c:\Office\acesutra-Web\src"
$files = Get-ChildItem -Path $srcDir -Recurse -Include *.tsx, *.ts, *.css

$replacements = @(
    @{ Pattern = 'from-brand-orange\s+via-brand-hover\s+to-\[#FFA070\]'; Replacement = 'from-sky-400 via-cyan-400 to-blue-500' },
    @{ Pattern = 'from-brand-orange\s+via-brand-hover\s+to-white'; Replacement = 'from-sky-400 via-cyan-300 to-white' },
    @{ Pattern = 'from-brand-orange'; Replacement = 'from-sky-400' },
    @{ Pattern = 'via-brand-hover'; Replacement = 'via-cyan-400' },
    @{ Pattern = 'to-brand-orange'; Replacement = 'to-cyan-400' },
    @{ Pattern = 'shadow-glow-orange-lg'; Replacement = 'shadow-glow-blue-lg' },
    @{ Pattern = 'shadow-glow-orange'; Replacement = 'shadow-glow-blue' },
    @{ Pattern = 'bg-brand-orange/10'; Replacement = 'bg-brand-cyan/10' },
    @{ Pattern = 'bg-brand-orange/20'; Replacement = 'bg-brand-cyan/20' },
    @{ Pattern = 'bg-brand-orange/5'; Replacement = 'bg-brand-cyan/10' },
    @{ Pattern = 'bg-brand-orange/90'; Replacement = 'bg-brand-blue/90' },
    @{ Pattern = 'border-brand-orange/20'; Replacement = 'border-brand-cyan/25' },
    @{ Pattern = 'border-brand-orange/30'; Replacement = 'border-brand-cyan/30' },
    @{ Pattern = 'border-brand-orange/40'; Replacement = 'border-brand-cyan/40' },
    @{ Pattern = 'border-brand-orange/50'; Replacement = 'border-brand-cyan/50' },
    @{ Pattern = 'hover:border-brand-orange/40'; Replacement = 'hover:border-brand-cyan/40' },
    @{ Pattern = 'hover:border-brand-orange'; Replacement = 'hover:border-brand-cyan' },
    @{ Pattern = 'border-brand-orange'; Replacement = 'border-brand-cyan' },
    @{ Pattern = 'hover:text-brand-hover'; Replacement = 'hover:text-sky-300' },
    @{ Pattern = 'hover:text-brand-orange'; Replacement = 'hover:text-cyan-400' },
    @{ Pattern = 'group-hover:text-brand-orange'; Replacement = 'group-hover:text-cyan-400' },
    @{ Pattern = 'text-brand-orange/90'; Replacement = 'text-cyan-400/90' },
    @{ Pattern = 'text-brand-orange'; Replacement = 'text-cyan-400' },
    @{ Pattern = 'focus-visible:ring-brand-orange'; Replacement = 'focus-visible:ring-brand-blue' },
    @{ Pattern = 'focus:ring-brand-orange'; Replacement = 'focus:ring-brand-blue' },
    @{ Pattern = 'focus:border-brand-orange'; Replacement = 'focus:border-brand-blue' },
    @{ Pattern = 'selection:bg-brand-orange'; Replacement = 'selection:bg-brand-blue' }
)

$modifiedCount = 0
foreach ($file in $files) {
    # Skip tokens.css and tailwind.config.js which we already updated specifically
    if ($file.Name -eq "tokens.css") { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $original = $content
    
    foreach ($r in $replacements) {
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $r.Pattern, $r.Replacement)
    }
    
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $($file.FullName)"
        $modifiedCount++
    }
}

Write-Host "Total files updated: $modifiedCount"
