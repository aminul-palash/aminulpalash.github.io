# Aminul Palash Portfolio

Personal website for Md Aminul Haque Palash, built with Hugo and the HTML5 UP Dimension theme.

## Requirements

- Hugo Extended 0.88.1 or later
- Docker (optional, if Hugo is not installed)

## Run Locally

From the project root:

```bash
hugo server
```

Open http://localhost:1313 in your browser.

### Run with Docker

```bash
docker run --rm -it \
  -v "$PWD":/src \
  -w /src \
  -p 1313:1313 \
  klakegg/hugo:0.88.1-ext-alpine \
  server --bind 0.0.0.0
```

Open http://localhost:1313.

## Project Structure

- `content/` - Bio, experience, projects, publications, highlights, blog, interests, and contact content
- `themes/dimension/` - Hugo theme, layout, CSS, and JavaScript
- `static/` - Source assets such as the background image and CV
- `config.toml` - Hugo configuration
- `.github/workflows/hugo.yml` - CI workflow that builds and deploys the site

## GitHub Pages Deployment

Deployment is automatic via GitHub Actions (`.github/workflows/hugo.yml`): every push to `main` builds the site with Hugo and publishes it to GitHub Pages.

One-time setup:

1. In GitHub, open **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.

The site will be available at:

```text
https://aminulpalash.github.io/
```
