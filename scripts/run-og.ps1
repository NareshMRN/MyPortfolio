Add-Type -Path "scripts/GenerateOg.cs" -ReferencedAssemblies System.Drawing

$publicDir = (Resolve-Path "public").Path

# 1. Main Home OG - Keep user photo (photo.jpg) as og-image.jpg
$photoPath = Join-Path $publicDir "assets\photo.jpg"
$ogHomePath = Join-Path $publicDir "og-image.jpg"
Copy-Item -Path $photoPath -Destination $ogHomePath -Force
Write-Host "Main Site OG Image: $ogHomePath ($((Get-Item $ogHomePath).Length) bytes)"

# 2. Generate Square Photo OG
$photoPath = Join-Path $publicDir "assets\photo.jpg"
$ogSquarePath = Join-Path $publicDir "og-photo.jpg"
[OgGenerator]::GenerateSquarePhotoOg($photoPath, $ogSquarePath)
Write-Host "Created: $ogSquarePath ($((Get-Item $ogSquarePath).Length) bytes)"

# 3. Create projects folder and generate Project OGs
$projDir = Join-Path $publicDir "images\projects"
if (!(Test-Path $projDir)) { New-Item -ItemType Directory -Path $projDir | Out-Null }

$projects = @(
    @{ slug = "sangeetha"; title = "SANGEETHA"; cat = "Music & Karaoke Platform"; tech = "Flutter · Next.js · Node.js · Riverpod · MongoDB Atlas · Docker" },
    @{ slug = "tradevault"; title = "TRADEVAULT"; cat = "Autonomous Algorithmic Trading"; tech = "Python · FastAPI · Multi-Agent DeepSeek · Redis · Alpaca API" },
    @{ slug = "tryscan"; title = "TRYSCAN"; cat = "Edge Hardware Diagnostics"; tech = "Kotlin · Jetpack Compose · Node.js · Express · Coroutines" },
    @{ slug = "vector-search"; title = "VECTOR SEARCH ENGINE"; cat = "Dense Semantic Matching"; tech = "Python · PyTorch · FAISS · Sentence-Transformers · Kaggle" },
    @{ slug = "gradio-image-gen"; title = "GRADIO IMAGE GEN"; cat = "Generative Diffusion Pipeline"; tech = "Qwen 2.5 · Stable Diffusion v1.5 · Gradio · Kaggle Rank 63" },
    @{ slug = "zyro-rag-challenge"; title = "ZYRO HR RAG"; cat = "Enterprise Grounded Assistant"; tech = "Streamlit · LangChain · Groq LLaMA-3.3 · FAISS · LangSmith" },
    @{ slug = "aira"; title = "AIRA"; cat = "Multimodal AI Voice Agent"; tech = "JavaScript · Web Audio API · OpenAI & Groq APIs · GitHub Actions" },
    @{ slug = "english-learning-app"; title = "ENGLISH LEARNING APP"; cat = "Native Android & EdTech"; tech = "Kotlin · Jetpack Compose · Node.js · Express · Flow" }
)

foreach ($p in $projects) {
    $outP = Join-Path $projDir ($p.slug + ".jpg")
    [OgGenerator]::GenerateProjectOg($p.title, $p.cat, $p.tech, $outP)
    Write-Host "Created Project OG: $($p.slug).jpg ($((Get-Item $outP).Length) bytes)"
}

# 4. Optimize Certificates for WhatsApp (< 250KB)
$certOgDir = Join-Path $publicDir "certificates\og"
if (!(Test-Path $certOgDir)) { New-Item -ItemType Directory -Path $certOgDir | Out-Null }

$certFiles = Get-ChildItem -Path (Join-Path $publicDir "certificates") -Filter "*.jpg" -File
foreach ($cf in $certFiles) {
    $targetPath = Join-Path $certOgDir $cf.Name
    [OgGenerator]::OptimizeCertificateOg($cf.FullName, $targetPath)
    Write-Host "Optimized Certificate OG: $($cf.Name) ($((Get-Item $targetPath).Length) bytes)"
}

Write-Host "All OG images generated successfully!"
