# rewire.school — Landing Pages

Landing pages for ad campaigns, lead generation, and course promotion.

## Structure

```
pages/
├── ai-pm/              → Landing page for AI for Product Managers
├── ai-se/              → Landing page for AI for Software Engineers
├── ai-founders/        → Landing page for AI for Startup Founders
├── free-assessment/    → Funnel page → AI Readiness Quiz
└── [your-campaign]/    → Create new folders for new campaigns
shared/
├── tracking.js         → UTM capture, Meta Pixel, Google Tag Manager
└── styles.css          → Shared landing page base styles
```

## How to Deploy

1. Create or edit your landing page in `pages/`
2. Commit and push to `main`
3. GitHub Actions auto-deploys to the server
4. Your page is live at `https://rewire.school/lp/[page-name]/` (auto-deploys in ~30 seconds)

## Quick Start

```bash
# Clone the repo
git clone https://github.com/blazerianone/rewire-landing.git
cd rewire-landing

# Create a new landing page
mkdir pages/my-campaign
# Add your index.html inside it

# Deploy
git add .
git commit -m "Add my-campaign landing page"
git push origin main
# Done! Live in ~30 seconds
```

## Tracking

Include tracking.js in your landing page to auto-capture UTM parameters:

```html
<script src="/lp/shared/tracking.js"></script>
```

This captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` and stores them for lead attribution.

## Brand Assets

- Fonts: Manrope (headings), DM Sans (body), JetBrains Mono (technical)
- Purple: `#8B5CF6`
- Dark: `#0A0A0A`
- Use the rewire.school logo SVG from the shared assets
