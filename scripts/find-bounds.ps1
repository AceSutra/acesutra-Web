Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Shreyash\.gemini\antigravity-ide\brain\635047f4-411a-4ef6-a3a1-eb6da27171f1\.user_uploaded\media_1792835616430.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

for ($y = 650; $y -le 760; $y += 5) {
    $minX = 1000; $maxX = 0; $cnt = 0
    for ($x = 0; $x -lt 1024; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            $cnt++
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
        }
    }
    Write-Host "Y=$y : Count=$cnt, MinX=$minX, MaxX=$maxX"
}
$bmp.Dispose()
