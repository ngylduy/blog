# APMODY Blogger utilities

Static CSS and JavaScript utilities for Blogger themes and APMODY-style blog widgets.

## What is inside

```text
css/        Widget and theme CSS snippets.
js/         Browser-side Blogger utilities.
lib/        Vendored browser libraries used by existing snippets.
plugin/     Plugin bootstrap/runtime files.
rtdb_s.js   Firebase Realtime Database click tracking module.
```

Most files are designed to be loaded directly in Blogger templates or static pages. This repo does not require a build step.

## Usage

Load only the files you need from your own static host or CDN mirror:

```html
<link rel="stylesheet" href="/css/addt.css">
<script src="/js/main.js" defer></script>
```

For `rtdb_s.js`, use a module script:

```html
<script type="module" src="/rtdb_s.js"></script>
```

## Development

Requirements:

- Node.js 20+

Run repository checks:

```sh
npm run check
```

No formatter or bundler is required yet. Keep diffs small and avoid rewriting obfuscated/minified files unless original source or source maps are available.

## Security notes

`rtdb_s.js` runs in browsers, so Firebase web config is public by design. Protect data with Firebase Realtime Database rules, not by hiding client config.

Do not commit private credentials, service account keys, or production-only admin tokens.

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).
