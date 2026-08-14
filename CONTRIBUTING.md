# Contributing

Thanks for improving APMODY Blogger utilities.

## Workflow

1. Fork the repository.
2. Create a focused branch.
3. Make the smallest useful change.
4. Run `npm run check`.
5. Open a pull request with what changed and how you tested it.

## Code style

- Keep browser compatibility in mind.
- Prefer native browser APIs and plain CSS/JS.
- Do not add dependencies unless stdlib/native APIs cannot solve it cleanly.
- Do not rewrite obfuscated/minified files without original source or source maps.
- Keep public APIs, selectors, and Blogger integration points backward compatible.

## Security

Never commit private credentials, service account keys, admin tokens, or user data. Firebase web config is public; security must live in Firebase rules and backend policy.
