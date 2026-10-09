# Public Boundary

This repository is the public DiagramKit entry point. The program itself is published to npm as
`@dztabel/diagramkit`, built from a private repository by the workflow in `.github/workflows/release.yml`.

## In this repository

- `README.md`, `README.en.md`, `README.zh-CN.md`
- `examples/showcase` — the preview: the figures `showcase.json` lists, each with the spec it was built from
  (`NN-name.json` beside `NN-name.png`), and the rows and the opening picture the README shows. The specs are the project's
  own, written from public sources or invented examples; where a figure shows someone's data, its `caption` names the source
- `docs/public-boundary.md`
- `.github/workflows/release.yml` — builds, checks and publishes the package

No copy of the program, the skill or the fonts is checked in here: one source, no drift.

## In the npm package

- `dist/` — the command and the editing panel, bundled and minified
- `web/` — the panel's page
- `skills/diagramkit` — the agent skill, the same version as the command (`diagramkit sync-skill` installs it)
- `examples/`, `schemas/` — what `diagramkit example` and `diagramkit schema` print
- `fonts/` — Noto Sans SC, Noto Sans, Excalifont and Xiaolai, with `OFL.txt` and a hash manifest
- `README.md`, `THIRD-PARTY-NOTICES.md`, `package.json`

## Not published anywhere

- source code, type declarations and source maps
- tests, their fixtures and the reference corpus the layouts are judged against
- design records, review notes and other development documents

The release workflow reads the built package before publishing and refuses it if any of these is found, or if the
built code carries comments.

## How a release is made

The workflow runs only when started by hand. It checks the private source out with a read-only deploy key, builds the
package, runs the boundary gate, installs the packed package on macOS and Windows and draws a figure with it, and
publishes to npm only when asked to (`publish: true`); otherwise it rehearses the publication. Its logs are public, so
it runs no unit tests and prints no source: versions, file names and the results of the smoke builds only.
