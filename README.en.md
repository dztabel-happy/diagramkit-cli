<h1 align="center">DiagramKit</h1>

<p align="center">Report-grade diagrams for agents</p>

<p align="center">
  <a href="README.zh-CN.md">中文</a>
  ·
  <a href="#install">Install</a>
  ·
  <a href="#quick-start">Quick Start</a>
  ·
  <a href="#preview">Preview</a>
</p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@dztabel/diagramkit?label=npm">
  <img alt="node" src="https://img.shields.io/badge/node-%E2%89%A5%2022.16-blue">
  <img alt="platforms" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-blue">
</p>

---

Users provide material or say what they need to explain. The agent works out what the figure should say, and DiagramKit draws it: a diagram sized for a Word page or a slide, with its text at a readable size, as PNG, SVG and PDF.

DiagramKit draws structure, not numbers:

- How something works: a process with steps, decisions and exceptions; a treatment or production line; messages between parties.
- How something is organised: an organisation, a transaction structure, a contract system, a system's components, classes and tables.
- When and why: a schedule with dates, events over time, the causes of a problem, risks by likelihood and impact, where money comes from and goes.

Numeric trends, comparisons and distributions are a chart's work, not a diagram's.

## Preview

Figures built for a Word page with nothing asked beyond the content: one colour family for the whole document, Times New Roman with the machine's Song typeface.

| | | |
|:---:|:---:|:---:|
| <sub><strong>Decision flow</strong></sub> | <sub><strong>Flow in phases</strong></sub> | <sub><strong>Transaction structure</strong></sub> |
| <img src="examples/showcase/01-performance-payment.png" alt="DiagramKit decision flow" width="300"> | <img src="examples/showcase/02-implementation-flow.png" alt="DiagramKit flow in phases" width="300"> | <img src="examples/showcase/03-transaction-structure.png" alt="DiagramKit transaction structure" width="300"> |
| <sub><strong>Risk matrix</strong></sub> | <sub><strong>Sources and uses of funds</strong></sub> | <sub><strong>Implementation schedule</strong></sub> |
| <img src="examples/showcase/04-risk-matrix.png" alt="DiagramKit risk matrix" width="300"> | <img src="examples/showcase/05-sources-and-uses.png" alt="DiagramKit sankey" width="300"> | <img src="examples/showcase/06-implementation-schedule.png" alt="DiagramKit Gantt chart" width="300"> |
| <sub><strong>Organisation</strong></sub> | <sub><strong>Policy timeline</strong></sub> | <sub><strong>Cause analysis</strong></sub> |
| <img src="examples/showcase/07-company-organisation.png" alt="DiagramKit organisation chart" width="300"> | <img src="examples/showcase/08-policy-timeline.png" alt="DiagramKit timeline" width="300"> | <img src="examples/showcase/09-cause-analysis.png" alt="DiagramKit fishbone" width="300"> |
| <sub><strong>The same flow, drawn by hand</strong></sub> | <sub><strong>Sequence</strong></sub> | <sub><strong>Classes</strong></sub> |
| <img src="examples/showcase/10-implementation-flow-hand-drawn.png" alt="DiagramKit hand-drawn flow" width="300"> | <img src="examples/showcase/11-agent-sequence.png" alt="DiagramKit sequence diagram" width="300"> | <img src="examples/showcase/12-class.png" alt="DiagramKit class diagram" width="300"> |

The specs of the first nine are beside them in [`examples/showcase`](examples/showcase). More types: mind map, ER diagram, layered architecture, C4, quadrant chart, pie, radar, treemap, kanban, user journey, requirement diagram.

## Install

DiagramKit needs **Node.js 22.16 or later**.

### 1. Install the CLI

```bash
npm install -g @dztabel/diagramkit
diagramkit --version
```

Output like this means the CLI is installed:

```text
diagramkit 0.1.0 (contract 1)
```

### 2. Install one agent skill

The skill ships inside the npm package, so it always matches the installed CLI.

#### 2.1 Codex

```bash
diagramkit sync-skill --out ~/.agents/skills/diagramkit
```

Open Codex and type `$diagramkit`. If you can select the skill with `Tab`, it is ready. If it does not appear, press `Cmd+K` / `Ctrl+K`, choose `Force Reload Skills`, or reopen Codex.

#### 2.2 Claude Code

```bash
diagramkit sync-skill --out ~/.claude/skills/diagramkit
```

Open Claude Code and type `/diagramkit`. If you can select the skill, it is ready. If it does not appear, run `/reload-skills` and try again.

`sync-skill` writes into a new folder. When you update the CLI, remove the old skill folder first and run the command again.

## Quick Start

### 1. Add figures to a report the agent is writing

```text
$diagramkit Write the implementation plan as a Word report from my notes, and add figures where they help the reader: the approval process, the schedule, who signs what with whom.
/diagramkit Write the implementation plan as a Word report from my notes, and add figures where they help the reader: the approval process, the schedule, who signs what with whom.
```

### 2. Draw one figure from a passage

```text
$diagramkit Draw the payment procedure described in section 4 as a flowchart for the report.
/diagramkit Draw the payment procedure described in section 4 as a flowchart for the report.
```

### 3. Figures for slides

```text
$diagramkit Make the project organisation and the three-year roadmap as two figures for a 16:9 slide deck.
/diagramkit Make the project organisation and the three-year roadmap as two figures for a 16:9 slide deck.
```

### 4. Revise a figure

```text
$diagramkit In the process figure, split the review step into technical review and financial review, and build it again.
/diagramkit In the process figure, split the review step into technical review and financial review, and build it again.
```

The agent reads the material, decides what the figure says, writes its spec, builds it and checks the result.

## Technical Details

The agent writes a semantic JSON spec — what the boxes and relations are, never where they stand — and runs:

```bash
diagramkit validate figure.json
diagramkit build figure.json --out ./figure-1 --format png
```

DiagramKit lays the figure out, checks it (labels inside their boxes, relations clear of each other, text size on the page) and writes:

```text
figure-1/diagram.png            the figure, at its printed size
figure-1/diagram-manifest.json  the size to insert it at, and its caption
figure-1/diagram.html           a viewer page with an "edit" button
figure-1/quality.json           what was checked and what was found
figure-1/build-result.json
```

`--format all` adds `diagram.svg` and a vector `diagram.pdf`. `diagramkit example <name>` prints a complete spec for every figure type, and `diagramkit schema` the contract.

**Pages.** A figure is built for the page it goes on: a Word page by default (A4 portrait; landscape, A3 and custom text areas on request), a 16:9 slide with `--output ppt`, or a picture of its own with `--output standalone`. On a Word page the main text prints at 9 pt and never below 6.5 pt; a figure too large for its page is folded or divided at the boundaries of its content, not shrunk until it cannot be read.

**Look.** On a Word page a figure that names no style is dressed `business`: one colour family for the whole document, each figure type coloured in its own manner within it. Other document styles: `mono` (black-and-white print, official documents), `guofeng`, `soft`, `notebook` (hand-drawn) and `report` (each type's own regular look). Every type can also be drawn with the hand-drawn pen.

**Typefaces.** With no `--font`, a figure on a Word page is written in Times New Roman with the Song typeface the machine has (Songti SC on macOS, SimSun / 宋体 on Windows, Noto Serif CJK where installed), like the text of a report. A slide, a picture of its own, and any machine without a Song typeface use the bundled Noto Sans SC. `--font "Noto Sans SC"` asks for the bundled face everywhere — the same figure on every machine. The typeface a figure was drawn in is recorded in its `manifest.json`.

A PNG or PDF does not depend on the fonts of the machine that opens it. An SVG embeds subsets of the bundled faces only: opened in a browser on a machine without the Song typeface it is drawn in the embedded fallback, each line held to the width it was laid out in.

**Editing.** `diagramkit panel figure.json --open` opens a local panel in the browser to edit the figure's content and look; `diagramkit serve <folder>` serves a folder of figures and lets a built figure's viewer page open its panel. Both listen on this computer only.

## Troubleshooting

```bash
diagramkit doctor
```

`doctor` reports the Node version, the native renderer and the fonts in use — `font.wordPage` is what a figure on a Word page is written in on this machine.

- **`npm install` fails or `doctor` reports no native renderer.** DiagramKit draws with `skia-canvas`, which installs a prebuilt binary for the platform: macOS (Apple Silicon and Intel), Windows (x64 and ARM64) and Linux (x64 and ARM64). This release was checked on macOS Apple Silicon and Windows 11 ARM64.
- **`DKT001: Font is unavailable`.** A family named with `--font` is not installed. Leave `--font` out, or name an installed family.
- **Node is older than 22.16.** Install a current Node.js LTS.

When reporting a problem, include `diagramkit --version`, the output of `diagramkit doctor`, and a minimal spec that reproduces it.

## Repository Scope

This public repository contains the documentation, preview figures with their specs, and the release workflow.

The npm package contains the built command, the editing panel, the agent skill, the examples and the fonts with their licences. Source code, tests, the reference corpus and development documents are not included in the package or in this repository — see [`docs/public-boundary.md`](docs/public-boundary.md).

## License

DiagramKit is distributed through npm as a proprietary CLI in built form, free to install and use. Third-party components and fonts keep their own licences (`THIRD-PARTY-NOTICES.md` in the package). This repository provides the documentation and preview assets for installing and using the CLI.
