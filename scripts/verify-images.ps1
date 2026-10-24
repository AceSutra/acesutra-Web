Add-Type -AssemblyName System.Drawing

$p1 = "c:\Office\acesutra-Web\public\logo-icon.png"
$bmp1 = [System.Drawing.Bitmap]::FromFile($p1)
Write-Host "logo-icon.png: $($bmp1.Width)x$($bmp1.Height)"
Write-Host "Corner alpha: $($bmp1.GetPixel(0,0).A), $($bmp1.GetPixel($bmp1.Width-1,0).A)"
Write-Host "Center pixel: $($bmp1.GetPixel([int]($bmp1.Width/2), [int]($bmp1.Height/2)))"
$bmp1.Dispose()

$p2 = "c:\Office\acesutra-Web\public\logo-dark.png"
$bmp2 = [System.Drawing.Bitmap]::FromFile($p2)
Write-Host "logo-dark.png: $($bmp2.Width)x$($bmp2.Height)"
Write-Host "Corner alpha: $($bmp2.GetPixel(0,0).A)"
$bmp2.Dispose()
