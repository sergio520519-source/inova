# Script automatizado para crear repositorio en GitHub
$ErrorActionPreference = "SilentlyContinue"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Creando Repositorio en GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Agregar GitHub CLI al PATH
$env:Path += ";C:\Program Files\GitHub CLI"

$repoName = "ntginnova-website"
$description = "Sitio web premium para NTG INNOVA - Soluciones de Ozono y Control Ambiental"

# Verificar GitHub CLI
$ghVersion = gh --version 2>&1 | Select-String "version"
if ($ghVersion) {
    Write-Host "✅ GitHub CLI encontrado" -ForegroundColor Green
    
    # Intentar autenticación
    gh auth status 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Autenticado en GitHub" -ForegroundColor Green
        
        # Obtener username
        $username = gh api user --jq .login 2>&1
        if ($username) {
            Write-Host "Usuario: $username" -ForegroundColor Cyan
            Write-Host ""
            Write-Host "Creando repositorio: $repoName..." -ForegroundColor Yellow
            
            # Cambiar a la carpeta del proyecto
            Set-Location "C:\Users\Luis888\Desktop\proyecto-raul"
            
            # Crear repositorio y subir código
            gh repo create $repoName --public --description "$description" --source . --remote origin --push 2>&1
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host ""
                Write-Host "========================================" -ForegroundColor Green
                Write-Host "  ✅ ¡Repositorio creado exitosamente!" -ForegroundColor Green
                Write-Host "========================================" -ForegroundColor Green
                Write-Host ""
                Write-Host "URL del repositorio:" -ForegroundColor Cyan
                Write-Host "https://github.com/$username/$repoName" -ForegroundColor White
                Write-Host ""
                Write-Host "¡Todo listo! Puedes compartir este link." -ForegroundColor Green
                Start-Sleep -Seconds 2
                Start-Process "https://github.com/$username/$repoName"
                exit 0
            } else {
                Write-Host "⚠️  Error al crear el repositorio" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "⚠️  No estás autenticado en GitHub" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Autenticando con GitHub..." -ForegroundColor Yellow
        Write-Host "Se abrirá tu navegador para autenticarte." -ForegroundColor Cyan
        Write-Host ""
        
        # Iniciar autenticación
        gh auth login 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "✅ Autenticación exitosa" -ForegroundColor Green
            Write-Host "Ejecuta este script nuevamente para crear el repositorio." -ForegroundColor Cyan
            exit 0
        }
    }
}

# Si llegamos aquí, usar método alternativo
Write-Host ""
Write-Host "Abriendo GitHub en el navegador..." -ForegroundColor Yellow
Write-Host ""

# Preparar URL con parámetros pre-rellenados
$repoUrl = "https://github.com/new?name=$repoName&description=$([System.Web.HttpUtility]::UrlEncode($description))"

# Abrir navegador
Start-Process $repoUrl

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Instrucciones" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. En la página de GitHub que se abrió:" -ForegroundColor White
Write-Host "   - Verifica el nombre: $repoName" -ForegroundColor Gray
Write-Host "   - Selecciona Public o Private" -ForegroundColor Gray
Write-Host "   - ⚠️  NO marques ninguna opción adicional" -ForegroundColor Yellow
Write-Host "   - Click 'Create repository'" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Luego ejecuta estos comandos:" -ForegroundColor White
Write-Host ""
Write-Host "   cd C:\Users\Luis888\Desktop\proyecto-raul" -ForegroundColor Green
Write-Host "   git remote add origin https://github.com/TU_USUARIO/$repoName.git" -ForegroundColor Green
Write-Host "   git branch -M main" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "   (Reemplaza TU_USUARIO con tu usuario de GitHub)" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

