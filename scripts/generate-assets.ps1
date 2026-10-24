Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Shreyash\.gemini\antigravity-ide\brain\635047f4-411a-4ef6-a3a1-eb6da27171f1\.user_uploaded\media_1792835616430.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $bmp.Width
$h = $bmp.Height

# 1. Full transparent PNG
$transBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Also create dark-mode version where dark "Ace" is enhanced with white/silver highlights so it is legible on dark backgrounds
$darkModeBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $rNorm = $c.R / 255.0
        $gNorm = $c.G / 255.0
        $bNorm = $c.B / 255.0
        
        # Calculate alpha assuming white background
        $alphaF = [Math]::Max([Math]::Max(1.0 - $rNorm, 1.0 - $gNorm), 1.0 - $bNorm)
        
        # Slight threshold curve to ensure near-white background (noise in jpeg) is pure 0
        $threshold = 0.03
        if ($alphaF -lt $threshold) {
            $alphaF = 0.0
        } else {
            $alphaF = ($alphaF - $threshold) / (1.0 - $threshold)
            # Gentle contrast curve
            $alphaF = [Math]::Pow($alphaF, 0.95)
            if ($alphaF -gt 1.0) { $alphaF = 1.0 }
        }
        
        if ($alphaF -le 0.001) {
            $transBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Unmix foreground color
            $fgR = [Math]::Max(0.0, [Math]::Min(1.0, ($rNorm - (1.0 - $alphaF)) / $alphaF))
            $fgG = [Math]::Max(0.0, [Math]::Min(1.0, ($gNorm - (1.0 - $alphaF)) / $alphaF))
            $fgB = [Math]::Max(0.0, [Math]::Min(1.0, ($bNorm - (1.0 - $alphaF)) / $alphaF))
            
            $aInt = [int]($alphaF * 255)
            $rInt = [int]($fgR * 255)
            $gInt = [int]($fgG * 255)
            $bInt = [int]($fgB * 255)
            
            $transBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($aInt, $rInt, $gInt, $bInt))
            
            # For dark mode version:
            # If in the word "Ace" area (y > 700 and x < 450) and it's dark navy:
            # boost the brightness to crisp white/light silver so it reads clearly on dark background
            if ($y -gt 680 -and $x -lt 450) {
                # Dark navy pixels: low R and G, moderate B
                $brightness = ($fgR * 0.299 + $fgG * 0.587 + $fgB * 0.114)
                if ($brightness -lt 0.35) {
                    # Invert luminance to make "Ace" white/light-silver with subtle cyan tint
                    $boost = 1.0 - $brightness
                    $dr = [Math]::Min(255, [int](220 + $fgR * 35))
                    $dg = [Math]::Min(255, [int](230 + $fgG * 25))
                    $db = 255
                    $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($aInt, $dr, $dg, $db))
                } else {
                    $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($aInt, $rInt, $gInt, $bInt))
                }
            } else {
                $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($aInt, $rInt, $gInt, $bInt))
            }
        }
    }
}

# Save full logos
$transBmp.Save("c:\Office\acesutra-Web\public\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$darkModeBmp.Save("c:\Office\acesutra-Web\public\logo-dark.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved logo.png and logo-dark.png"

# 2. Extract Icon only (Arrow emblem)
# Bounds of the icon: X: 110 to 930, Y: 120 to 720
$iconCropRect = [System.Drawing.Rectangle]::FromLTRB(110, 120, 930, 725)
$iconBmp = New-Object System.Drawing.Bitmap(820, 605, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($iconBmp)
$g.DrawImage($transBmp, [System.Drawing.Rectangle]::new(0, 0, 820, 605), $iconCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

# Make it a square icon with nice padding
$squareIcon = New-Object System.Drawing.Bitmap(820, 820, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSq = [System.Drawing.Graphics]::FromImage($squareIcon)
$gSq.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSq.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
# Center vertically
$gSq.DrawImage($iconBmp, 0, [int]((820 - 605) / 2))
$gSq.Dispose()
$iconBmp.Dispose()

$squareIcon.Save("c:\Office\acesutra-Web\public\logo-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved logo-icon.png"

# 3. Generate Favicon sizes
function CreateResizedPng($src, $targetPath, $size) {
    $res = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $gr = [System.Drawing.Graphics]::FromImage($res)
    $gr.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gr.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gr.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gr.DrawImage($src, 0, 0, $size, $size)
    $gr.Dispose()
    $res.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $res.Dispose()
}

CreateResizedPng $squareIcon "c:\Office\acesutra-Web\public\favicon-16x16.png" 16
CreateResizedPng $squareIcon "c:\Office\acesutra-Web\public\favicon-32x32.png" 32
CreateResizedPng $squareIcon "c:\Office\acesutra-Web\public\favicon-48x48.png" 48
CreateResizedPng $squareIcon "c:\Office\acesutra-Web\public\apple-touch-icon.png" 180
CreateResizedPng $squareIcon "c:\Office\acesutra-Web\public\android-chrome-192x192.png" 192
CreateResizedPng $squareIcon "c:\Office\acesutra-Web\public\android-chrome-512x512.png" 512

# Create favicon.ico from 32x32
$fav32 = New-Object System.Drawing.Bitmap(32, 32, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gFav = [System.Drawing.Graphics]::FromImage($fav32)
$gFav.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gFav.DrawImage($squareIcon, 0, 0, 32, 32)
$gFav.Dispose()
$hIcon = $fav32.GetHicon()
$iconObj = [System.Drawing.Icon]::FromHandle($hIcon)
$fileStream = [System.IO.File]::OpenWrite("c:\Office\acesutra-Web\public\favicon.ico")
$iconObj.Save($fileStream)
$fileStream.Close()
$fav32.Dispose()

$squareIcon.Dispose()
$transBmp.Dispose()
$darkModeBmp.Dispose()
$bmp.Dispose()
Write-Host "All assets generated successfully!"
