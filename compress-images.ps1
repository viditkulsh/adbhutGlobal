# Image Compression Script for Adbhut Global
# This PowerShell script compresses images to improve website performance

# Function to check if ImageMagick is installed
function Test-ImageMagick {
    try {
        $result = & magick -version 2>$null
        return $true
    } catch {
        return $false
    }
}

# Function to compress images
function Compress-Images {
    param(
        [string]$InputPath,
        [string]$OutputPath = $null,
        [int]$Quality = 80,
        [string]$MaxSize = "1920x1080>"
    )
    
    if (-not $OutputPath) {
        $OutputPath = $InputPath
    }
    
    if (-not (Test-Path $InputPath)) {
        Write-Host "Path not found: $InputPath" -ForegroundColor Red
        return
    }
    
    $imageFiles = Get-ChildItem $InputPath -Include *.jpg, *.jpeg, *.png, *.bmp, *.tiff -Recurse
    $totalFiles = $imageFiles.Count
    $processed = 0
    
    Write-Host "Found $totalFiles image files to process..." -ForegroundColor Green
    
    foreach ($file in $imageFiles) {
        $processed++
        $percentage = [math]::Round(($processed / $totalFiles) * 100, 1)
        
        # Create output directory if it doesn't exist
        $outputDir = Split-Path $file.FullName.Replace($InputPath, $OutputPath)
        if (-not (Test-Path $outputDir)) {
            New-Item -Path $outputDir -ItemType Directory -Force | Out-Null
        }
        
        $outputFile = $file.FullName.Replace($InputPath, $OutputPath)
        
        # Get original file size
        $originalSize = [math]::Round($file.Length / 1MB, 2)
        
        try {
            # Compress image using ImageMagick
            & magick $file.FullName -quality $Quality -resize $MaxSize -strip $outputFile
            
            # Get compressed file size
            $compressedSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 2)
            $savings = [math]::Round((($originalSize - $compressedSize) / $originalSize) * 100, 1)
            
            Write-Host "[$percentage%] $($file.Name): $originalSize MB → $compressedSize MB (${savings}% savings)" -ForegroundColor Yellow
        } catch {
            Write-Host "Error compressing $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    Write-Host "Compression complete!" -ForegroundColor Green
}

# Function to convert images to modern formats
function Convert-ToModernFormats {
    param(
        [string]$InputPath,
        [string]$Format = "webp", # webp or avif
        [int]$Quality = 80
    )
    
    $imageFiles = Get-ChildItem $InputPath -Include *.jpg, *.jpeg, *.png -Recurse
    
    foreach ($file in $imageFiles) {
        $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, $Format)
        
        try {
            & magick $file.FullName -quality $Quality $outputFile
            Write-Host "Converted: $($file.Name) → $([System.IO.Path]::GetFileName($outputFile))" -ForegroundColor Green
        } catch {
            Write-Host "Error converting $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

# Main execution
Write-Host "=== Adbhut Global Image Compression Tool ===" -ForegroundColor Cyan
Write-Host ""

# Check if ImageMagick is installed
if (-not (Test-ImageMagick)) {
    Write-Host "ImageMagick is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "winget install ImageMagick.ImageMagick" -ForegroundColor Yellow
    Write-Host "Or download from: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    exit 1
}

# Define paths
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$galleryPath = Join-Path $projectRoot "public\Gallery"
$companyPath = Join-Path $projectRoot "public\Company"
$domesticPath = Join-Path $projectRoot "public\Domestic"
$internationalPath = Join-Path $projectRoot "public\International"

Write-Host "Project root: $projectRoot" -ForegroundColor Cyan

# Menu for user selection
do {
    Write-Host ""
    Write-Host "Select compression option:" -ForegroundColor White
    Write-Host "1. Compress Gallery images (recommended: 75% quality)"
    Write-Host "2. Compress Company images (recommended: 80% quality)"
    Write-Host "3. Compress all images (recommended: 80% quality)"
    Write-Host "4. Convert to WebP format (modern browsers)"
    Write-Host "5. Convert to AVIF format (newest, best compression)"
    Write-Host "6. Exit"
    Write-Host ""
    
    $choice = Read-Host "Enter your choice (1-6)"
    
    switch ($choice) {
        "1" {
            if (Test-Path $galleryPath) {
                Write-Host "Compressing Gallery images..." -ForegroundColor Green
                Compress-Images -InputPath $galleryPath -Quality 75 -MaxSize "1200x800>"
            } else {
                Write-Host "Gallery path not found: $galleryPath" -ForegroundColor Red
            }
        }
        "2" {
            if (Test-Path $companyPath) {
                Write-Host "Compressing Company images..." -ForegroundColor Green
                Compress-Images -InputPath $companyPath -Quality 80 -MaxSize "1920x1080>"
            } else {
                Write-Host "Company path not found: $companyPath" -ForegroundColor Red
            }
        }
        "3" {
            Write-Host "Compressing all images..." -ForegroundColor Green
            if (Test-Path $galleryPath) { 
                Compress-Images -InputPath $galleryPath -Quality 75 -MaxSize "1200x800>"
            }
            if (Test-Path $companyPath) { 
                Compress-Images -InputPath $companyPath -Quality 80 -MaxSize "1920x1080>"
            }
            if (Test-Path $domesticPath) { 
                Compress-Images -InputPath $domesticPath -Quality 80 -MaxSize "1920x1080>"
            }
            if (Test-Path $internationalPath) { 
                Compress-Images -InputPath $internationalPath -Quality 80 -MaxSize "1920x1080>"
            }
        }
        "4" {
            Write-Host "Converting to WebP format..." -ForegroundColor Green
            if (Test-Path $galleryPath) { 
                Convert-ToModernFormats -InputPath $galleryPath -Format "webp" -Quality 80
            }
            if (Test-Path $companyPath) { 
                Convert-ToModernFormats -InputPath $companyPath -Format "webp" -Quality 85
            }
        }
        "5" {
            Write-Host "Converting to AVIF format..." -ForegroundColor Green
            if (Test-Path $galleryPath) { 
                Convert-ToModernFormats -InputPath $galleryPath -Format "avif" -Quality 70
            }
            if (Test-Path $companyPath) { 
                Convert-ToModernFormats -InputPath $companyPath -Format "avif" -Quality 75
            }
        }
        "6" {
            Write-Host "Exiting..." -ForegroundColor Yellow
            break
        }
        default {
            Write-Host "Invalid choice. Please select 1-6." -ForegroundColor Red
        }
    }
} while ($choice -ne "6")

Write-Host ""
Write-Host "=== Compression Complete ===" -ForegroundColor Cyan
Write-Host "Remember to test your website after compression to ensure all images load correctly." -ForegroundColor Yellow
