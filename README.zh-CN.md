<h1 align="center">DiagramKit</h1>

<p align="center">给 Agent 用的报告级示意图工具</p>

<p align="center">
  <a href="README.md">English</a>
  ·
  <a href="#安装">安装</a>
  ·
  <a href="#快速开始">快速开始</a>
  ·
  <a href="#效果预览">效果预览</a>
</p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@dztabel/diagramkit?label=npm">
  <img alt="node" src="https://img.shields.io/badge/node-%E2%89%A5%2022.16-blue">
  <img alt="platforms" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-blue">
</p>

<p align="center"><img src="examples/showcase/hero.png" alt="DiagramKit 画的图：分阶段的流程、能源流向、风险矩阵、手绘思维导图、甘特图" width="100%"></p>

---

用户给出材料，或者说清楚要讲明白什么；Agent 想清楚这张图该表达什么，DiagramKit 负责把它画出来：按 Word 页面或幻灯片的尺寸排好，文字是能看清的字号，输出 PNG、SVG、PDF。

DiagramKit 画的是结构，不是数字：

- 事情怎么运转：带步骤、判断和异常的流程，工艺或生产线，各方之间的消息往来。
- 事情怎么组织：组织架构、交易结构、合同体系、系统的组成、类和数据表。
- 什么时候、为什么：带日期的进度计划、按时间排列的事件、问题的成因、按可能性与影响排列的风险、资金从哪来到哪去。

数字的趋势、对比和分布是图表的事，不是示意图的事。

## 效果预览

下面每张图都出自一份语义描述：有哪些框、什么关系、哪些数据，最多再点明强调色、方向和要放进去的页面。没有一个位置、尺寸或走线是手写的：摆放、折行、走线都是 DiagramKit 排的。点每行图下面的名称可以看原图；[`examples/showcase`](examples/showcase) 里同名的 `.json` 是它的描述文件。

### Word 页面上的默认外观

不指定外观时，放进 Word 页面的图整份文档一套色系，字体是 Times New Roman 加本机的宋体。

<!-- showcase:default -->
<p align="center"><img src="examples/showcase/rows/01.png" alt="DiagramKit：带判断的流程、分阶段的流程、状态机" width="100%"></p>
<p align="center"><sub>01 <a href="examples/showcase/01-decision-flow.png">带判断的流程</a> · 02 <a href="examples/showcase/02-phased-flow.png">分阶段的流程</a> · 03 <a href="examples/showcase/03-state-machine.png">状态机</a></sub></p>
<p align="center"><img src="examples/showcase/rows/02.png" alt="DiagramKit：审批流程、数据管线、时间线" width="100%"></p>
<p align="center"><sub>04 <a href="examples/showcase/04-approval-flow.png">审批流程</a> · 05 <a href="examples/showcase/05-data-pipeline.png">数据管线</a> · 06 <a href="examples/showcase/06-timeline.png">时间线</a></sub></p>
<p align="center"><img src="examples/showcase/rows/03.png" alt="DiagramKit：时序图、类图、思维导图" width="100%"></p>
<p align="center"><sub>07 <a href="examples/showcase/07-sequence.png">时序图</a> · 08 <a href="examples/showcase/08-class.png">类图</a> · 09 <a href="examples/showcase/09-mindmap.png">思维导图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/04.png" alt="DiagramKit：交易结构、组织架构、甘特图" width="100%"></p>
<p align="center"><sub>10 <a href="examples/showcase/10-transaction-structure.png">交易结构</a> · 11 <a href="examples/showcase/11-organisation.png">组织架构</a> · 12 <a href="examples/showcase/12-gantt.png">甘特图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/05.png" alt="DiagramKit：鱼骨图、用户旅程图、环形图" width="100%"></p>
<p align="center"><sub>13 <a href="examples/showcase/13-fishbone.png">鱼骨图</a> · 14 <a href="examples/showcase/14-journey.png">用户旅程图</a> · 15 <a href="examples/showcase/15-donut.png">环形图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/06.png" alt="DiagramKit：风险矩阵、象限图、雷达图" width="100%"></p>
<p align="center"><sub>16 <a href="examples/showcase/16-risk-matrix.png">风险矩阵</a> · 17 <a href="examples/showcase/17-quadrant.png">象限图</a> · 18 <a href="examples/showcase/18-radar.png">雷达图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/07.png" alt="DiagramKit：ER 图、矩形树图、C4 上下文图" width="100%"></p>
<p align="center"><sub>19 <a href="examples/showcase/19-er.png">ER 图</a> · 20 <a href="examples/showcase/20-treemap.png">矩形树图</a> · 21 <a href="examples/showcase/21-c4-context.png">C4 上下文图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/08.png" alt="DiagramKit：桑基图、看板、系统架构图" width="100%"></p>
<p align="center"><sub>22 <a href="examples/showcase/22-sankey.png">桑基图</a> · 23 <a href="examples/showcase/23-kanban.png">看板</a> · 24 <a href="examples/showcase/24-architecture.png">系统架构图</a></sub></p>
<!-- /showcase:default -->

### 各图型自己的外观

`--style report`：每种图型用它自己的配色。

<!-- showcase:report -->
<p align="center"><img src="examples/showcase/rows/09.png" alt="DiagramKit：云架构图、C4 容器图、需求图" width="100%"></p>
<p align="center"><sub>25 <a href="examples/showcase/25-cloud-architecture.png">云架构图</a> · 26 <a href="examples/showcase/26-c4-container.png">C4 容器图</a> · 27 <a href="examples/showcase/27-requirement.png">需求图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/10.png" alt="DiagramKit：多级桑基图、分组的矩形树图、玫瑰图" width="100%"></p>
<p align="center"><sub>28 <a href="examples/showcase/28-energy-flows.png">多级桑基图</a> · 29 <a href="examples/showcase/29-treemap-emissions.png">分组的矩形树图</a> · 30 <a href="examples/showcase/30-rose.png">玫瑰图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/11.png" alt="DiagramKit：满意度旅程图、分泳道的甘特图、版本生命周期" width="100%"></p>
<p align="center"><sub>31 <a href="examples/showcase/31-journey-satisfaction.png">满意度旅程图</a> · 32 <a href="examples/showcase/32-gantt-lanes.png">分泳道的甘特图</a> · 33 <a href="examples/showcase/33-release-lifecycle.png">版本生命周期</a></sub></p>
<!-- /showcase:report -->

### 手绘笔

`--style notebook`：手绘的线条、手写字体，连线走曲线。

<!-- showcase:notebook -->
<p align="center"><img src="examples/showcase/rows/12.png" alt="DiagramKit：故障响应流程、时序图、看板" width="100%"></p>
<p align="center"><sub>34 <a href="examples/showcase/34-hand-flow.png">故障响应流程</a> · 35 <a href="examples/showcase/35-hand-sequence.png">时序图</a> · 36 <a href="examples/showcase/36-hand-kanban.png">看板</a></sub></p>
<p align="center"><img src="examples/showcase/rows/13.png" alt="DiagramKit：ER 图、组织架构、雷达图" width="100%"></p>
<p align="center"><sub>37 <a href="examples/showcase/37-hand-er.png">ER 图</a> · 38 <a href="examples/showcase/38-hand-organisation.png">组织架构</a> · 39 <a href="examples/showcase/39-hand-radar.png">雷达图</a></sub></p>
<p align="center"><img src="examples/showcase/rows/14.png" alt="DiagramKit：时间线、桑基图、类图" width="100%"></p>
<p align="center"><sub>40 <a href="examples/showcase/40-hand-timeline.png">时间线</a> · 41 <a href="examples/showcase/41-hand-sankey.png">桑基图</a> · 42 <a href="examples/showcase/42-hand-class.png">类图</a></sub></p>
<!-- /showcase:notebook -->

### 同一张图，六种文档风格

同一份描述，只改 `style` 一个词：

<!-- showcase:styles -->
<p align="center"><img src="examples/showcase/rows/15.png" alt="DiagramKit：business、report、mono" width="100%"></p>
<p align="center"><sub>43 <a href="examples/showcase/43-style-business.png"><code>business</code></a> · 44 <a href="examples/showcase/44-style-report.png"><code>report</code></a> · 45 <a href="examples/showcase/45-style-mono.png"><code>mono</code></a></sub></p>
<p align="center"><img src="examples/showcase/rows/16.png" alt="DiagramKit：guofeng、soft、notebook" width="100%"></p>
<p align="center"><sub>46 <a href="examples/showcase/46-style-guofeng.png"><code>guofeng</code></a> · 47 <a href="examples/showcase/47-style-soft.png"><code>soft</code></a> · 48 <a href="examples/showcase/48-style-notebook.png"><code>notebook</code></a></sub></p>
<!-- /showcase:styles -->

## 安装

DiagramKit 需要 **Node.js 22.16 或更高版本**。

### 1. 安装命令行

```bash
npm install -g @dztabel/diagramkit
diagramkit --version
```

看到类似下面的输出，说明命令行装好了：

```text
diagramkit 0.1.1 (contract 1)
```

### 2. 安装一个 Agent 技能

技能随 npm 包一起分发，所以它总是和装着的命令行版本一致。

#### 2.1 Codex

```bash
diagramkit sync-skill --out ~/.agents/skills/diagramkit
```

打开 Codex，输入 `$diagramkit`，能用 `Tab` 选中这个技能就说明可以用了。没出现的话，按 `Cmd+K` / `Ctrl+K` 选 `Force Reload Skills`，或者重开 Codex。

#### 2.2 Claude Code

```bash
diagramkit sync-skill --out ~/.claude/skills/diagramkit
```

打开 Claude Code，输入 `/diagramkit`，能选中这个技能就说明可以用了。没出现的话，运行 `/reload-skills` 再试。

`sync-skill` 只往新目录里写。以后升级命令行时，先删掉旧的技能目录，再运行一次上面的命令。

## 快速开始

### 1. 让 Agent 写报告时顺手配图

```text
$diagramkit 根据我的笔记把实施方案写成一份 Word 报告，在有助于读者理解的地方配图：审批流程、进度计划、谁和谁签什么合同。
/diagramkit 根据我的笔记把实施方案写成一份 Word 报告，在有助于读者理解的地方配图：审批流程、进度计划、谁和谁签什么合同。
```

### 2. 把一段文字画成一张图

```text
$diagramkit 把第四节描述的付费流程画成一张流程图，放进报告里。
/diagramkit 把第四节描述的付费流程画成一张流程图，放进报告里。
```

### 3. 给幻灯片配图

```text
$diagramkit 把项目组织架构和三年路线图各做成一张图，用在 16:9 的幻灯片里。
/diagramkit 把项目组织架构和三年路线图各做成一张图，用在 16:9 的幻灯片里。
```

### 4. 修改一张图

```text
$diagramkit 把流程图里的“评审”拆成“技术评审”和“财务评审”两步，重新出图。
/diagramkit 把流程图里的“评审”拆成“技术评审”和“财务评审”两步，重新出图。
```

读材料、想清楚图该表达什么、写图的描述文件、出图、检查结果，都由 Agent 来做。

## 技术细节

Agent 写一份语义化的 JSON 描述——只说有哪些方框、它们之间是什么关系，从不指定谁放在哪——然后运行：

```bash
diagramkit validate figure.json
diagramkit build figure.json --out ./figure-1 --format png
```

DiagramKit 负责排版和检查（标签是否在框内、连线是否互相避让、文字在页面上是多大），并写出：

```text
figure-1/diagram.png            图本身，已是印刷尺寸
figure-1/diagram-manifest.json  插入文档时的尺寸和图题
figure-1/diagram.html           查看页，带“开始编辑”按钮
figure-1/quality.json           检查了什么、发现了什么
figure-1/build-result.json
```

`--format all` 会另外输出 `diagram.svg` 和矢量的 `diagram.pdf`。`diagramkit example <名称>` 能打印出每种图型的一份完整示例，`diagramkit schema` 打印完整的契约。

**页面。** 图是按它要放进去的页面来排的：默认是 Word 页面（A4 竖版；也可以要横版、A3 或自定义版心），`--output ppt` 是 16:9 幻灯片，`--output standalone` 是独立图片。在 Word 页面上，主要文字印出来是 9 pt，绝不低于 6.5 pt。一页放不下的图先换一种放得下的排法；都放不下时，按看得清的字号画出来并报告放不下，同时给出办法：折行、在内容的自然边界处分成几张、换更大的页面。除非明确要求，不会缩到看不清。

**外观。** 放进 Word 页面的图不写风格时按 `business` 着装：整份文档一套色系，每种图型在这套色系里用自己合适的上色方式。其它文档风格：`mono`（黑白印刷、公文）、`guofeng`、`soft`、`notebook`（手绘）和 `report`（各图型自己的常规外观）。每种图型也都可以用手绘笔来画。

**字体。** 不写 `--font` 时，放进 Word 页面的图用 Times New Roman 加本机装有的宋体（macOS 上是 Songti SC，Windows 上是宋体 SimSun，装有 Noto Serif CJK 的机器用它），和报告正文一致。幻灯片、独立图片，以及没有宋体的机器，用随包的思源黑体 Noto Sans SC。`--font "Noto Sans SC"` 让每张图都用随包字体——同一张图在任何机器上都一样。一张图实际用了什么字体，记在它的 `manifest.json` 里。

PNG 和 PDF 与打开它的机器装了什么字体无关。SVG 里只内嵌随包字体的子集：在没有宋体的机器上用浏览器打开时，文字由内嵌的后备字体显示，每一行仍排在原来的宽度里。

**编辑。** `diagramkit panel figure.json --open` 在浏览器里打开一个本地面板，可以改图的内容和外观；`diagramkit serve <目录>` 为一个目录里的图提供服务，这样从已出图的查看页就能点进面板。两者都只在本机监听。

## 常见问题

```bash
diagramkit doctor
```

`doctor` 报告 Node 版本、原生渲染器和正在使用的字体——其中 `font.wordPage` 是本机放进 Word 页面的图会用的字体。

- **`npm install` 失败，或 `doctor` 说没有原生渲染器。** DiagramKit 用 `skia-canvas` 出图，它会为当前平台装一个预编译的二进制：macOS（Apple 芯片和 Intel）、Windows（x64 和 ARM64）、Linux（x64 和 ARM64）。每个版本发布前，都会在 macOS（Apple 芯片）、Windows（x64）和 Linux（x64）上全新安装并出一张图。
- **`DKT001: Font is unavailable`。** `--font` 写的字体本机没有装。去掉 `--font`，或者写一个装着的字体。
- **Node 版本低于 22.16。** 请安装当前的 Node.js LTS。

报告问题时，请附上 `diagramkit --version`、`diagramkit doctor` 的输出，以及能复现问题的最小描述文件。

## 仓库范围

这个公开仓库里是文档、预览图及其源文件，以及发版流程。

npm 包里是构建后的命令行、编辑面板、Agent 技能、示例，以及字体和它们的许可证。源代码、测试、参考图库和开发文档既不在包里，也不在这个仓库里——见 [`docs/public-boundary.md`](docs/public-boundary.md)。

## 许可

DiagramKit 以构建后的形式通过 npm 分发，是专有软件，可以免费安装和使用。第三方组件和字体各自保留原有许可（见包内的 `THIRD-PARTY-NOTICES.md`）。这个仓库提供安装和使用它所需的文档与预览素材。
