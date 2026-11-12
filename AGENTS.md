# LISA 2027 website

This is the standalone Jekyll site for the LISA Consortium Meeting 2027 at the Gran Sasso Science Institute.

- Production URL: https://lisaconsortium2027.com/ (custom domain via `CNAME`; https://masellia.github.io/lisa-consortium-2027/ redirects there)
- GitHub repository: `masellia/lisa-consortium-2027`
- Default branch: `main`
- Deployment: GitHub Pages from the repository root

## Structure

- `_config.yml`: Jekyll configuration, production `url`, and empty `baseurl` (served from the custom-domain root)
- `_data/conferences/lisa-consortium-2027.yml`: all event content, venues, dining, committees, participants, timetable, and Code of Conduct contacts
- Root `*.md` files: one page per route, using root-based permalinks
- `_layouts/conference.html`: shared page layout
- `_includes/`: conference header, venue map, and dining map
- `assets/css/conference.css`: all conference styling
- `assets/js/conference-map.js` and `conference-dining-map.js`: Leaflet controllers
- `assets/img/meetings/LISA_27/`: room photos and future LOC portraits under `loc/`

## URL rules

The site is served from the root of the custom domain. Keep using the URL filters so the site still works if a base path is reintroduced.

- Use `{{ '/path/' | relative_url }}` for internal links and assets.
- Use `{{ page.url | absolute_url }}` for canonical or structured-data URLs.
- Never hardcode `/lisa-consortium-2027/` or the old `/meetings/lisa-consortium-2027/` path in page content.
- Navigation is generated from `_includes/conference-header.html` and `conference_root: /`.

## Build

From the repository root:

```bash
JEKYLL_NO_BUNDLER_REQUIRE=true /opt/homebrew/lib/ruby/gems/3.4.0/bin/jekyll build --destination _site
```

`_site/` and `.jekyll-cache/` are local build output and must not be committed.

Jekyll can exit successfully while dropping a document because of a YAML error. Always inspect the build output for `Error: YAML Exception` and confirm that the expected routes were generated.

## Validation

Before committing:

1. Build the site.
2. Confirm all nine routes exist: `/`, `/venue/`, `/dining/`, `/timetable/`, `/participants/`, `/information/`, `/information/local-organizing-committee/`, `/information/public-lecture/`, `/code-of-conduct/`.
3. Check that internal links and assets use the base path exactly once.
4. Check navigation, dropdown behavior, Leaflet maps, and mobile layout when changing shared markup or CSS.
5. Confirm the sitemap and canonical URLs use `https://lisaconsortium2027.com/`.

For a local preview, serve `_site/` directly and open `http://127.0.0.1:<port>/`.

## Content rules

- Keep public event content in the data file where possible.
- Participant entries may contain only public information: `name`, `affiliation`, and an optional public `url`.
- Do not add private registration data, email lists, access tokens, or other secrets to the repository.
- LOC portraits use `name`, `initials`, `image`, and `image_alt`; empty images render the initials placeholder.
- Store approved portraits under `assets/img/meetings/LISA_27/loc/`.

## Deployment

After validation:

```bash
git add <changed files>
git commit -m "<concise description>"
git push origin main
```

GitHub Pages rebuilds automatically. Verify the production URL after the deployment completes.
