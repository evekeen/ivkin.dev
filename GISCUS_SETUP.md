# Giscus Setup Instructions

## Background

During the Astro migration, the comment system was changed from **Disqus** (used in Hugo) to **Giscus** for better GitHub integration and privacy.

### Original Hugo Setup
- Comment system: Disqus
- Configuration: `disqusShortname="https-ivkin-dev"` in `config.toml`

### New Astro Setup
- Comment system: Giscus (GitHub Discussions-based)
- Component: `src/components/Comments.astro`

## Error: "giscus is not installed on this repository"

This error occurs because Giscus requires one-time setup steps that haven't been completed yet.

## Required Setup Steps

### 1. Enable GitHub Discussions

1. Go to: https://github.com/evekeen/ivkin.dev/settings
2. Scroll to "Features" section
3. Check the box for "Discussions"
4. Click "Save changes"

### 2. Install Giscus GitHub App

1. Go to: https://github.com/apps/giscus
2. Click "Install" or "Configure"
3. Select "Only select repositories"
4. Choose `evekeen/ivkin.dev`
5. Click "Install" to grant permissions

### 3. Verify Configuration

1. Go to: https://giscus.app/
2. Enter repository: `evekeen/ivkin.dev`
3. Verify the configuration matches:
   - **Repository**: evekeen/ivkin.dev
   - **Repository ID**: R_kgDOMwdTVw
   - **Category**: General
   - **Category ID**: DIC_kwDOMwdTVw
   - **Mapping**: pathname

If the IDs don't match, you may need to update them in `src/components/Comments.astro`.

## Current Configuration

The Giscus component is configured with:

```javascript
data-repo="evekeen/ivkin.dev"
data-repo-id="R_kgDOMwdTVw"
data-category="General"
data-category-id="DIC_kwDOMwdTVw"
data-mapping="pathname"
data-strict="0"
data-reactions-enabled="1"
data-theme="preferred_color_scheme"
```

## Testing

After completing the setup steps:

1. Build and deploy the site: `npm run build`
2. Visit any blog post page
3. Scroll to the comments section at the bottom
4. You should see the Giscus comment widget load
5. Try posting a test comment (will create a GitHub Discussion)

## Fallback

If JavaScript is disabled, users will see:
> "Please enable JavaScript to view comments."

## Benefits of Giscus over Disqus

- ✅ No ads or tracking
- ✅ Open source
- ✅ Integrates with GitHub (uses GitHub Discussions)
- ✅ Supports reactions and markdown
- ✅ Automatic dark mode support
- ✅ Free and privacy-friendly
