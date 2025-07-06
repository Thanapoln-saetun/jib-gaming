@echo off
echo 🚀 Starting asset download for JIB Gaming...

REM Create directories
if not exist "public\assets\images" mkdir "public\assets\images"
if not exist "public\assets\icons" mkdir "public\assets\icons"
if not exist "public\assets\brands" mkdir "public\assets\brands"

echo ✅ Directories created!

echo.
echo 📥 To download images, you can:
echo.
echo 1. Use online placeholder generators:
echo    - https://via.placeholder.com/
echo    - https://placehold.co/
echo    - https://picsum.photos/
echo.
echo 2. Download free images from:
echo    - https://unsplash.com/
echo    - https://pixabay.com/
echo    - https://pexels.com/
echo.
echo 3. Or manually create placeholder files with these dimensions:
echo.
echo 📋 Required files:
echo.
echo === HEADER IMAGES ===
echo public\assets\images\hero-background-1.png (2175x827)
echo public\assets\images\hero-background-2.png (2175x827)
echo public\assets\images\hero-background-3.png (2175x827)
echo public\assets\images\animation.png (32x44)
echo public\assets\images\logo.png (102x46)
echo.
echo === SOCIAL ICONS ===
echo public\assets\icons\facebook.png (14x14)
echo public\assets\icons\instagram.png (17x15)
echo public\assets\icons\line.png (14x14)
echo public\assets\icons\tiktok.png (14x14)
echo public\assets\icons\messenger.png (14x14)
echo.
echo === BRAND LOGOS ===
echo public\assets\brands\acer.png (126x60)
echo public\assets\brands\msi.png (126x60)
echo public\assets\brands\asus.png (126x60)
echo public\assets\brands\intel.png (126x60)
echo public\assets\brands\amd.png (126x60)
echo public\assets\brands\viewsonic.png (126x60)
echo public\assets\brands\logitech.png (126x60)
echo public\assets\brands\nvidia.png (126x60)
echo public\assets\brands\corsair.png (126x60)
echo public\assets\brands\dell.png (126x60)
echo public\assets\brands\razer.png (126x60)
echo public\assets\brands\kingston.png (126x60)
echo.
echo === CATEGORY ICONS ===
echo public\assets\icons\cpu.svg (60x60)
echo public\assets\icons\hard-disk.svg (60x60)
echo public\assets\icons\vga-card.svg (60x60)
echo public\assets\icons\m2.svg (60x60)
echo public\assets\icons\mainboard.svg (60x60)
echo public\assets\icons\case.svg (60x60)
echo public\assets\icons\ssd.svg (60x60)
echo public\assets\icons\cpu-liquid-cooler.svg (60x60)
echo public\assets\icons\ram.svg (60x60)
echo public\assets\icons\cpu-cooler.svg (60x60)
echo public\assets\icons\memory.svg (60x60)
echo public\assets\icons\power-supply.svg (60x60)
echo public\assets\icons\monitor.svg (60x60)
echo public\assets\icons\keyboard.svg (60x60)
echo public\assets\icons\mouse.svg (60x60)
echo.
echo 📝 See public\assets\README.md for more details!
echo.
pause
