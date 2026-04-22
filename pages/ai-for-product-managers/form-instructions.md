# PM Course Booking Form — Calendly Setup Guide

## Overview
Create a Calendly event with custom intake questions. Embed on LP.

---

## Step 1: Create Calendly Account

1. Go to [calendly.com](https://calendly.com)
2. Sign up with **hello@rewire.school** (or dedicated booking email)
3. Set display name: **rewire.school**
4. Free plan is fine for now

---

## Step 2: Create Event Type

1. Click **"Create"** → **"Event type"**
2. Select **"One-on-One"**
3. Event name: **AI PM Gap Assessment**
4. Duration: **15 minutes**
5. Location: **Zoom** (or Google Meet)

---

## Step 3: Add Custom Questions (Invitee Questions)

Go to: **Event Type → Edit → Booking form**

Add these questions:

| Question | Type | Required |
|----------|------|----------|
| Phone | Phone number | Yes |
| City | Short answer | Yes |
| Current Role | Short answer | Yes |
| Years of Experience | Dropdown | Yes |
| LinkedIn Profile | Short answer | No |
| Why are you interested in the AI PM Course? | Multiple lines | Yes |
| Referred By | Short answer | No |

### Years of Experience — Dropdown Options:
- 0-2 years
- 3-5 years
- 5-8 years
- 8+ years

**Note:** Name and Email are collected by default in Calendly.

---

## Step 4: Branding (Optional)

Go to: **Account → Branding**

- Logo: Upload rewire.school logo
- Brand color: `#8B5CF6` (purple)

---

## Step 5: Availability

Go to: **Event Type → Edit → Availability**

Set available hours for calls (India time / IST).

---

## Step 6: Get Embed Code

1. Go to your event type
2. Click **"Share"** → **"Add to website"**
3. Select **"Inline embed"**
4. Copy the embed code

**Or use this format:**
```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/rewire-school/ai-pm-gap-assessment?hide_gdpr_banner=1&background_color=0a0a0a&text_color=fafafa&primary_color=8b5cf6"
     style="min-width:320px;height:700px;">
</div>
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

Replace `rewire-school/ai-pm-gap-assessment` with your actual Calendly URL slug.

---

## Step 7: Embed on LP

**File:** `pages/ai-for-product-managers/index.html`
**Section:** `#book-call` (already has placeholder)

Paste the embed code there.

---

## Calendly Free Limitations

| Feature | Free | Pro ($10/mo) |
|---------|------|--------------|
| Custom questions | Yes | Yes |
| Embed on website | Yes | Yes |
| Redirect to thank-you page | No | Yes |
| Remove Calendly branding | No | Yes |

**For now:** Free plan works. Upgrade to Pro later if you need redirect to thank-you page (for Meta Pixel tracking).

---

## Files Reference

- **LP:** `pages/ai-for-product-managers/index.html`
- **Thank You:** `pages/ai-for-product-managers/thank-you.html` (use when upgrading to Pro)

---

## After Setup

Share the Calendly event URL (e.g., `calendly.com/rewire-school/ai-pm-gap-assessment`) so we can update the embed code on the LP.
