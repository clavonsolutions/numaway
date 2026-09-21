$files = @(
  "src\components\AppShowcaseSection.tsx",
  "src\components\Header.tsx",
  "src\components\HowItWorksSection.tsx",
  "src\components\MobileNav.tsx",
  "src\components\ThemeToggle.tsx",
  "src\hooks\useAnimatedCounter.tsx",
  "src\hooks\useScrollAnimation.tsx",
  "src\components\TestimonialsSection.tsx",
  "src\components\HeroSection.tsx",
  "src\components\ConsultationFormSection.tsx",
  "src\components\FindMyPathWizard.tsx",
  "src\components\MegaMenu.tsx",
  "src\components\SageSection.tsx",
  "src\components\StartJourneySection.tsx",
  "src\components\DestinationsSection.tsx",
  "src\components\StatsSection.tsx",
  "src\components\TrustCenterSection.tsx",
  "src\components\WhyNumawaySection.tsx",
  "src\components\ServicesSection.tsx",
  "src\components\CTASection.tsx",
  "src\components\WhatsAppButton.tsx",
  "src\components\CookieBanner.tsx",
  "src\components\NavLink.tsx"
)

foreach ($file in $files) {
  if (Test-Path $file) {
    $content = Get-Content $file -Raw
    if ($content -notmatch "^\s*`"use client`";") {
      Set-Content -Path $file -Value ("`"use client`";`n" + $content) -Encoding UTF8
    }
  }
}
