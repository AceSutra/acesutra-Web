Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Shreyash\.gemini\antigravity-ide\brain\635047f4-411a-4ef6-a3a1-eb6da27171f1\.user_uploaded\media_1792835616430.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Corner pixels:"
Write-Host "TopLeft:     $($bmp.GetPixel(0,0))"
Write-Host "TopRight:    $($bmp.GetPixel($bmp.Width - 1, 0))"
Write-Host "BottomLeft:  $($bmp.GetPixel(0, $bmp.Height - 1))"
Write-Host "BottomRight: $($bmp.GetPixel($bmp.Width - 1, $bmp.Height - 1))"

$bmp.Dispose()
