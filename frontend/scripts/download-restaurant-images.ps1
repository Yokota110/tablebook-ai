$dir = Join-Path $PSScriptRoot '..\public\images\restaurants'
$restaurants = @(
  @{ slug = 'ginza-sora'; tags = 'japanese,kaiseki,restaurant' },
  @{ slug = 'orchard-lantern'; tags = 'singapore,restaurant,food' },
  @{ slug = 'shibuya-noodle-lab'; tags = 'ramen,japanese,food' },
  @{ slug = 'kyoto-garden-table'; tags = 'kyoto,japanese,restaurant' },
  @{ slug = 'marina-bay-claypot'; tags = 'singapore,chinese,food' },
  @{ slug = 'osaka-commons'; tags = 'osaka,japanese,food' }
)

foreach ($r in $restaurants) {
  for ($v = 1; $v -le 4; $v++) {
    $lock = ([int[]][char[]]"$($r.slug)-$v" | Measure-Object -Sum).Sum
    $url = "https://loremflickr.com/1200/800/$($r.tags)?lock=$lock"
    $dest = Join-Path $dir "$($r.slug)-$v.jpg"
    Write-Host "Downloading $($r.slug)-$v.jpg"
    Invoke-WebRequest -Uri $url -OutFile $dest -TimeoutSec 60
    $size = (Get-Item $dest).Length
    Write-Host "  saved $([math]::Round($size/1KB)) KB"
  }
}

$default = Join-Path $dir 'default.jpg'
Invoke-WebRequest -Uri 'https://loremflickr.com/1200/800/food,restaurant?lock=9999' -OutFile $default -TimeoutSec 60
Write-Host 'Done'
