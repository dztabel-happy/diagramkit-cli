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

<p align="center"><img src="examples/showcase/hero.png" alt="Figures drawn by DiagramKit: a flow in phases, energy flows, a risk matrix, a hand-drawn mind map and a Gantt chart" width="100%"></p>

---

Users provide material or say what they need to explain. The agent works out what the figure should say, and DiagramKit draws it: a diagram sized for a Word page or a slide, with its text at a readable size, as PNG, SVG and PDF.

DiagramKit draws structure, not numbers:

- How something works: a process with steps, decisions and exceptions; a treatment or production line; messages between parties.
- How something is organised: an organisation, a transaction structure, a contract system, a system's components, classes and tables.
- When and why: a schedule with dates, events over time, the causes of a problem, risks by likelihood and impact, where money comes from and goes.

Numeric trends, comparisons and distributions are a chart's work, not a diagram's.

## Preview

Every figure below was built from a semantic spec: what the boxes, the relations and the data are, with at most a hint of emphasis (a tone, a direction) and the page it goes on. No position, size or line route is written by hand: placing, wrapping and routing are DiagramKit's work. A name under a row opens that figure at full size; the `.json` of the same name beside it in [`examples/showcase`](examples/showcase) is its spec.

### The default look on a Word page

With no look asked for, the figures of a Word document share one colour family and are set in Times New Roman with the machine's Song typeface.

<!-- showcase:default -->
<p align="center"><img src="examples/showcase/rows/01.png" alt="DiagramKit: Decision flow, Flow in phases, State machine" width="100%"></p>
<p align="center"><sub>01 <a href="examples/showcase/01-decision-flow.png">Decision flow</a> · 02 <a href="examples/showcase/02-phased-flow.png">Flow in phases</a> · 03 <a href="examples/showcase/03-state-machine.png">State machine</a></sub></p>
<p align="center"><img src="examples/showcase/rows/02.png" alt="DiagramKit: Approval procedure, Data pipeline, Timeline" width="100%"></p>
<p align="center"><sub>04 <a href="examples/showcase/04-approval-flow.png">Approval procedure</a> · 05 <a href="examples/showcase/05-data-pipeline.png">Data pipeline</a> · 06 <a href="examples/showcase/06-timeline.png">Timeline</a></sub></p>
<p align="center"><img src="examples/showcase/rows/03.png" alt="DiagramKit: Sequence, Classes, Mind map" width="100%"></p>
<p align="center"><sub>07 <a href="examples/showcase/07-sequence.png">Sequence</a> · 08 <a href="examples/showcase/08-class.png">Classes</a> · 09 <a href="examples/showcase/09-mindmap.png">Mind map</a></sub></p>
<p align="center"><img src="examples/showcase/rows/04.png" alt="DiagramKit: Transaction structure, Organisation, Gantt chart" width="100%"></p>
<p align="center"><sub>10 <a href="examples/showcase/10-transaction-structure.png">Transaction structure</a> · 11 <a href="examples/showcase/11-organisation.png">Organisation</a> · 12 <a href="examples/showcase/12-gantt.png">Gantt chart</a></sub></p>
<p align="center"><img src="examples/showcase/rows/05.png" alt="DiagramKit: Fishbone, User journey, Donut" width="100%"></p>
<p align="center"><sub>13 <a href="examples/showcase/13-fishbone.png">Fishbone</a> · 14 <a href="examples/showcase/14-journey.png">User journey</a> · 15 <a href="examples/showcase/15-donut.png">Donut</a></sub></p>
<p align="center"><img src="examples/showcase/rows/06.png" alt="DiagramKit: Risk matrix, Quadrant chart, Radar" width="100%"></p>
<p align="center"><sub>16 <a href="examples/showcase/16-risk-matrix.png">Risk matrix</a> · 17 <a href="examples/showcase/17-quadrant.png">Quadrant chart</a> · 18 <a href="examples/showcase/18-radar.png">Radar</a></sub></p>
<p align="center"><img src="examples/showcase/rows/07.png" alt="DiagramKit: ER diagram, Treemap, C4 context" width="100%"></p>
<p align="center"><sub>19 <a href="examples/showcase/19-er.png">ER diagram</a> · 20 <a href="examples/showcase/20-treemap.png">Treemap</a> · 21 <a href="examples/showcase/21-c4-context.png">C4 context</a></sub></p>
<p align="center"><img src="examples/showcase/rows/08.png" alt="DiagramKit: Sankey, Kanban, System architecture" width="100%"></p>
<p align="center"><sub>22 <a href="examples/showcase/22-sankey.png">Sankey</a> · 23 <a href="examples/showcase/23-kanban.png">Kanban</a> · 24 <a href="examples/showcase/24-architecture.png">System architecture</a></sub></p>
<!-- /showcase:default -->

### Each type's own look

`--style report`: every figure type in its own colours.

<!-- showcase:report -->
<p align="center"><img src="examples/showcase/rows/09.png" alt="DiagramKit: Cloud architecture, C4 containers, Requirement diagram" width="100%"></p>
<p align="center"><sub>25 <a href="examples/showcase/25-cloud-architecture.png">Cloud architecture</a> · 26 <a href="examples/showcase/26-c4-container.png">C4 containers</a> · 27 <a href="examples/showcase/27-requirement.png">Requirement diagram</a></sub></p>
<p align="center"><img src="examples/showcase/rows/10.png" alt="DiagramKit: Multi-stage Sankey, Grouped treemap, Rose chart" width="100%"></p>
<p align="center"><sub>28 <a href="examples/showcase/28-energy-flows.png">Multi-stage Sankey</a> · 29 <a href="examples/showcase/29-treemap-emissions.png">Grouped treemap</a> · 30 <a href="examples/showcase/30-rose.png">Rose chart</a></sub></p>
<p align="center"><img src="examples/showcase/rows/11.png" alt="DiagramKit: Satisfaction journey, Gantt chart in lanes, Release lifecycle" width="100%"></p>
<p align="center"><sub>31 <a href="examples/showcase/31-journey-satisfaction.png">Satisfaction journey</a> · 32 <a href="examples/showcase/32-gantt-lanes.png">Gantt chart in lanes</a> · 33 <a href="examples/showcase/33-release-lifecycle.png">Release lifecycle</a></sub></p>
<!-- /showcase:report -->

### The hand-drawn pen

`--style notebook`: hand-drawn strokes, a handwriting typeface, curved connectors.

<!-- showcase:notebook -->
<p align="center"><img src="examples/showcase/rows/12.png" alt="DiagramKit: Incident response, Sequence, Kanban" width="100%"></p>
<p align="center"><sub>34 <a href="examples/showcase/34-hand-flow.png">Incident response</a> · 35 <a href="examples/showcase/35-hand-sequence.png">Sequence</a> · 36 <a href="examples/showcase/36-hand-kanban.png">Kanban</a></sub></p>
<p align="center"><img src="examples/showcase/rows/13.png" alt="DiagramKit: ER diagram, Organisation, Radar" width="100%"></p>
<p align="center"><sub>37 <a href="examples/showcase/37-hand-er.png">ER diagram</a> · 38 <a href="examples/showcase/38-hand-organisation.png">Organisation</a> · 39 <a href="examples/showcase/39-hand-radar.png">Radar</a></sub></p>
<p align="center"><img src="examples/showcase/rows/14.png" alt="DiagramKit: Timeline, Sankey, Classes" width="100%"></p>
<p align="center"><sub>40 <a href="examples/showcase/40-hand-timeline.png">Timeline</a> · 41 <a href="examples/showcase/41-hand-sankey.png">Sankey</a> · 42 <a href="examples/showcase/42-hand-class.png">Classes</a></sub></p>
<!-- /showcase:notebook -->

### One figure, six document styles

The same spec with one word changed, `style`:

<!-- showcase:styles -->
<p align="center"><img src="examples/showcase/rows/15.png" alt="DiagramKit: business, report, mono" width="100%"></p>
<p align="center"><sub>43 <a href="examples/showcase/43-style-business.png"><code>business</code></a> · 44 <a href="examples/showcase/44-style-report.png"><code>report</code></a> · 45 <a href="examples/showcase/45-style-mono.png"><code>mono</code></a></sub></p>
<p align="center"><img src="examples/showcase/rows/16.png" alt="DiagramKit: guofeng, soft, notebook" width="100%"></p>
<p align="center"><sub>46 <a href="examples/showcase/46-style-guofeng.png"><code>guofeng</code></a> · 47 <a href="examples/showcase/47-style-soft.png"><code>soft</code></a> · 48 <a href="examples/showcase/48-style-notebook.png"><code>notebook</code></a></sub></p>
<!-- /showcase:styles -->

## Install

DiagramKit needs **Node.js 22.16 or later**.

### 1. Install the CLI

```bash
npm install -g @dztabel/diagramkit
diagramkit --version
```

Output like this means the CLI is installed:

```text
diagramkit 0.1.1 (contract 1)
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

**Pages.** A figure is built for the page it goes on: a Word page by default (A4 portrait; landscape, A3 and custom text areas on request), a 16:9 slide with `--output ppt`, or a picture of its own with `--output standalone`. On a Word page the main text prints at 9 pt and never below 6.5 pt. A figure too large for its page is first laid out another way that fits; where none does, it is drawn at a readable size and reported as not fitting, with what would make it fit — a fold, a split at the boundaries of its content, a larger page. It is never shrunk until it cannot be read unless that is asked for.

**Look.** On a Word page a figure that names no style is dressed `business`: one colour family for the whole document, each figure type coloured in its own manner within it. Other document styles: `mono` (black-and-white print, official documents), `guofeng`, `soft`, `notebook` (hand-drawn) and `report` (each type's own regular look). Every type can also be drawn with the hand-drawn pen.

**Typefaces.** With no `--font`, a figure on a Word page is written in Times New Roman with the Song typeface the machine has (Songti SC on macOS, SimSun / 宋体 on Windows, Noto Serif CJK where installed), like the text of a report. A slide, a picture of its own, and any machine without a Song typeface use the bundled Noto Sans SC. `--font "Noto Sans SC"` asks for the bundled face everywhere — the same figure on every machine. The typeface a figure was drawn in is recorded in its `manifest.json`.

A PNG or PDF does not depend on the fonts of the machine that opens it. An SVG embeds subsets of the bundled faces only: opened in a browser on a machine without the Song typeface it is drawn in the embedded fallback, each line held to the width it was laid out in.

**Editing.** `diagramkit panel figure.json --open` opens a local panel in the browser to edit the figure's content and look; `diagramkit serve <folder>` serves a folder of figures and lets a built figure's viewer page open its panel. Both listen on this computer only.

## Troubleshooting

```bash
diagramkit doctor
```

`doctor` reports the Node version, the native renderer and the fonts in use — `font.wordPage` is what a figure on a Word page is written in on this machine.

- **`npm install` fails or `doctor` reports no native renderer.** DiagramKit draws with `skia-canvas`, which installs a prebuilt binary for the platform: macOS (Apple Silicon and Intel), Windows (x64 and ARM64) and Linux (x64 and ARM64). Before it is published, every release is installed fresh and draws a figure on macOS (Apple Silicon), Windows (x64) and Linux (x64).
- **`DKT001: Font is unavailable`.** A family named with `--font` is not installed. Leave `--font` out, or name an installed family.
- **Node is older than 22.16.** Install a current Node.js LTS.

When reporting a problem, include `diagramkit --version`, the output of `diagramkit doctor`, and a minimal spec that reproduces it.

## Repository Scope

This public repository contains the documentation, preview figures with their specs, and the release workflow.

The npm package contains the built command, the editing panel, the agent skill, the examples and the fonts with their licences. Source code, tests, the reference corpus and development documents are not included in the package or in this repository — see [`docs/public-boundary.md`](docs/public-boundary.md).

## License

DiagramKit is distributed through npm as a proprietary CLI in built form, free to install and use. Third-party components and fonts keep their own licences (`THIRD-PARTY-NOTICES.md` in the package). This repository provides the documentation and preview assets for installing and using the CLI.
