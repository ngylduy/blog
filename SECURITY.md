# Security policy

## Supported versions

This repository tracks current static assets on the `main` branch. Security fixes target `main` first.

## Reporting a vulnerability

Please do not open a public issue for a security vulnerability.

Use GitHub private vulnerability reporting if available, or contact the maintainer through the repository owner profile.

Include:

- affected file or feature;
- impact;
- reproduction steps;
- suggested fix, if known.

## Scope

In scope:

- unsafe DOM handling;
- credential or token exposure;
- Firebase rule assumptions that can expose user data;
- dependency or vendored library security issues.

Out of scope:

- denial-of-service testing;
- spam or social engineering;
- attacks against sites not owned by the reporter.

Firebase web config in `rtdb_s.js` is not a secret by itself. Data access must be protected by Firebase Realtime Database rules.
