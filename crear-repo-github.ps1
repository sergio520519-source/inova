# Script para crear repositorio en GitHub automáticamente
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Creando Repositorio en GitHub..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoName = "ntginnova-website"
$description = "Sitio web premium para NTG INNOVA - Soluciones de Ozono y Control Ambiental"

# Método 1: Intentar con GitHub CLI
Write-Host "Método 1: Intentando con GitHub CLI..." -ForegroundColor Yellow

$ghPath = Get-Command gh -ErrorAction SilentlyContinue
if ($ghPath) {
    Write-Host "✅ GitHub CLI encontrado" -ForegroundColor Green
    
    # Verificar autenticación
    $authStatus = gh auth status 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Autenticado en GitHub" -ForegroundColor Green
        
        # Crear repositorio
        Write-Host "Creando repositorio: $repoName..." -ForegroundColor Yellow
        gh repo create $repoName --public --description "$description" --source . --remote origin --push
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "========================================" -ForegroundColor Green
            Write-Host "  ✅ ¡Repositorio creado exitosamente!" -ForegroundColor Green
            Write-Host "========================================" -ForegroundColor Green
            Write-Host ""
            $username = gh api user --jq .login
            Write-Host "URL del repositorio:" -ForegroundColor Cyan
            Write-Host "https://github.com/$username/$repoName" -ForegroundColor White
            Write-Host ""
            Write-Host "¡Código subido a GitHub!" -ForegroundColor Green
            exit 0
        }
    } else {
        Write-Host "⚠️  No estás autenticado en GitHub CLI" -ForegroundColor Yellow
        Write-Host "Ejecuta: gh auth login" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ GitHub CLI no está instalado" -ForegroundColor Red
}

# Método 2: Instalar GitHub CLI automáticamente
Write-Host ""
Write-Host "Método 2: Instalando GitHub CLI..." -ForegroundColor Yellow

try {
    # Verificar si winget está disponible
    $winget = Get-Command winget -ErrorAction SilentlyContinue
    if ($winget) {
        Write-Host "Instalando GitHub CLI con winget..." -ForegroundColor Yellow
        winget install --id GitHub.cli --accept-package-agreements --accept-source-agreements --silent
        
        # Esperar un momento y refrescar PATH
        Start-Sleep -Seconds 5
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        $ghPath = Get-Command gh -ErrorAction SilentlyContinue
        if ($ghPath) {
            Write-Host "✅ GitHub CLI instalado" -ForegroundColor Green
            Write-Host ""
            Write-Host "⚠️  Necesitas autenticarte primero:" -ForegroundColor Yellow
            Write-Host "1. Ejecuta: gh auth login" -ForegroundColor White
            Write-Host "2. Luego vuelve a ejecutar este script" -ForegroundColor White
            Write-Host ""
            Write-Host "O continúa manualmente con los siguientes pasos:" -ForegroundColor Cyan
            Write-Host ""
        }
    }
} catch {
    Write-Host "❌ No se pudo instalar GitHub CLI automáticamente" -ForegroundColor Red
}

# Método 3: Instrucciones manuales
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Instrucciones Manuales" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "OPCIÓN A: Crear desde el navegador (MÁS FÁCIL)" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Ve a: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: $repoName" -ForegroundColor White
Write-Host "3. Description: $description" -ForegroundColor White
Write-Host "4. Selecciona Public o Private" -ForegroundColor White
Write-Host "5. ⚠️  NO marques ninguna opción adicional" -ForegroundColor Yellow
Write-Host "6. Click 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "Luego ejecuta estos comandos:" -ForegroundColor Cyan
Write-Host ""
Write-Host "cd C:\Users\Luis888\Desktop\proyecto-raul" -ForegroundColor Gray
Write-Host "git remote add origin https://github.com/TU_USUARIO/$repoName.git" -ForegroundColor Gray
Write-Host "git branch -M main" -ForegroundColor Gray
Write-Host "git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "OPCIÓN B: Instalar GitHub CLI manualmente" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Descarga: https://cli.github.com/" -ForegroundColor White
Write-Host "2. Instala GitHub CLI" -ForegroundColor White
Write-Host "3. Ejecuta: gh auth login" -ForegroundColor White
Write-Host "4. Vuelve a ejecutar este script" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan

