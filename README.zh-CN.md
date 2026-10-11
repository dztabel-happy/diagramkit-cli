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

<p align="center"><img src="examples/gallery/hero.png" alt="DiagramKit 画的图：流程图、时序图、类图、ER 图、架构图、组织架构图、甘特图、桑基图、矩形树图等" width="100%"></p>

---

用户给出材料，或者说清楚要讲明白什么；Agent 想清楚这张图该表达什么，DiagramKit 负责把它画出来：按 Word 页面或幻灯片的尺寸排好，文字是能看清的字号，输出 PNG、SVG、PDF。

DiagramKit 画的是结构，不是数字：

- 事情怎么运转：带步骤、判断和异常的流程，工艺或生产线，各方之间的消息往来。
- 事情怎么组织：组织架构、交易结构、合同体系、系统的组成、类和数据表。
- 什么时候、为什么：带日期的进度计划、按时间排列的事件、问题的成因、按可能性与影响排列的风险、资金从哪来到哪去。

数字的趋势、对比和分布是图表的事，不是示意图的事。

## 效果预览

下面每张图都出自一份语义描述：有哪些框、什么关系、哪些数据，最多再点明强调色、方向和要放进去的页面。没有一个位置、尺寸或走线是手写的：摆放、折行、走线都是 DiagramKit 排的。

按图型排列，每种图型几张。没有标注的是放进 Word 页面的默认外观（整份文档一套色系，Times New Roman 加本机的宋体）；标 **report** 的是 `--style report`，各图型自己的配色；标 **手绘** 的是 `--style notebook`。点图下面的名称看原图；[`examples/gallery`](examples/gallery) 里同名的 `.json` 是它的描述文件。

<!-- showcase -->
<p align="center"><sub><a href="#流程图">流程图</a> · <a href="#时序图">时序图</a> · <a href="#类图">类图</a> · <a href="#er-图">ER 图</a> · <a href="#架构图">架构图</a> · <a href="#c4-模型">C4 模型</a> · <a href="#交易结构与合同关系">交易结构与合同关系</a> · <a href="#组织架构图">组织架构图</a> · <a href="#思维导图">思维导图</a> · <a href="#甘特图">甘特图</a> · <a href="#时间线">时间线</a> · <a href="#鱼骨图">鱼骨图</a> · <a href="#风险矩阵与象限图">风险矩阵与象限图</a> · <a href="#桑基图">桑基图</a> · <a href="#矩形树图">矩形树图</a> · <a href="#饼图环形图与玫瑰图">饼图、环形图与玫瑰图</a> · <a href="#雷达图">雷达图</a> · <a href="#用户旅程图">用户旅程图</a> · <a href="#看板">看板</a> · <a href="#需求图">需求图</a> · <a href="#同一张图六种文档风格">同一张图，六种文档风格</a></sub></p>

### 流程图

<p align="center"><img src="examples/gallery/rows/01.png" alt="DiagramKit：事故响应全流程 · 手绘、银行卡支付与清算、边缘 AI 推理 · report" width="100%"></p>
<p align="center"><sub>01 <a href="examples/gallery/01-incident-response.png">事故响应全流程 · 手绘</a> · 02 <a href="examples/gallery/02-card-payment.png">银行卡支付与清算</a> · 03 <a href="examples/gallery/03-edge-inference.png">边缘 AI 推理 · report</a></sub></p>
<p align="center"><img src="examples/gallery/rows/02.png" alt="DiagramKit：TCP 状态机、嵌入式启动流程 · 手绘、项目实施流程" width="100%"></p>
<p align="center"><sub>04 <a href="examples/gallery/04-tcp-states.png">TCP 状态机</a> · 05 <a href="examples/gallery/05-boot-sequence.png">嵌入式启动流程 · 手绘</a> · 06 <a href="examples/gallery/06-phased-flow.png">项目实施流程</a></sub></p>
<p align="center"><img src="examples/gallery/rows/03.png" alt="DiagramKit：AI 代理处理请求 · report、污水处理工艺、审批流程 · 手绘" width="100%"></p>
<p align="center"><sub>07 <a href="examples/gallery/07-ai-agent.png">AI 代理处理请求 · report</a> · 08 <a href="examples/gallery/08-treatment-process.png">污水处理工艺</a> · 09 <a href="examples/gallery/09-approval-flow.png">审批流程 · 手绘</a></sub></p>

### 时序图

<p align="center"><img src="examples/gallery/rows/04.png" alt="DiagramKit：Kubernetes 创建 Pod · 手绘、持续部署" width="100%"></p>
<p align="center"><sub>10 <a href="examples/gallery/10-kubectl-apply.png">Kubernetes 创建 Pod · 手绘</a> · 11 <a href="examples/gallery/11-deployment.png">持续部署</a></sub></p>
<p align="center"><img src="examples/gallery/rows/05.png" alt="DiagramKit：OAuth 2.0 授权码流程、3-D Secure 支付验证 · report" width="100%"></p>
<p align="center"><sub>12 <a href="examples/gallery/12-oauth.png">OAuth 2.0 授权码流程</a> · 13 <a href="examples/gallery/13-three-d-secure.png">3-D Secure 支付验证 · report</a></sub></p>
<p align="center"><img src="examples/gallery/rows/06.png" alt="DiagramKit：小程序下单与支付、并行调用后端 · 手绘、带重试的 CI 流程 · report" width="100%"></p>
<p align="center"><sub>14 <a href="examples/gallery/14-mini-program-payment.png">小程序下单与支付</a> · 15 <a href="examples/gallery/15-parallel-calls.png">并行调用后端 · 手绘</a> · 16 <a href="examples/gallery/16-ci-retries.png">带重试的 CI 流程 · report</a></sub></p>

### 类图

<p align="center"><img src="examples/gallery/rows/07.png" alt="DiagramKit：asyncio、流的继承层次 · 手绘" width="100%"></p>
<p align="center"><sub>17 <a href="examples/gallery/17-asyncio.png">asyncio</a> · 18 <a href="examples/gallery/18-streams.png">流的继承层次 · 手绘</a></sub></p>
<p align="center"><img src="examples/gallery/rows/08.png" alt="DiagramKit：游戏引擎对象模型 · 手绘、商品与评价、分类层级 · report" width="100%"></p>
<p align="center"><sub>19 <a href="examples/gallery/19-game-engine.png">游戏引擎对象模型 · 手绘</a> · 20 <a href="examples/gallery/20-product-types.png">商品与评价</a> · 21 <a href="examples/gallery/21-taxonomy.png">分类层级 · report</a></sub></p>
<p align="center"><img src="examples/gallery/rows/09.png" alt="DiagramKit：电力设备模型 · report、订单系统" width="100%"></p>
<p align="center"><sub>22 <a href="examples/gallery/22-power-system.png">电力设备模型 · report</a> · 23 <a href="examples/gallery/23-order-system.png">订单系统</a></sub></p>

### ER 图

<p align="center"><img src="examples/gallery/rows/10.png" alt="DiagramKit：博客系统表结构 · 手绘、订单管理表结构" width="100%"></p>
<p align="center"><sub>24 <a href="examples/gallery/24-wordpress.png">博客系统表结构 · 手绘</a> · 25 <a href="examples/gallery/25-northwind.png">订单管理表结构</a></sub></p>
<p align="center"><img src="examples/gallery/rows/11.png" alt="DiagramKit：Chinook 示例库、TPC-H 表结构 · report、学校选课 · 手绘" width="100%"></p>
<p align="center"><sub>26 <a href="examples/gallery/26-chinook.png">Chinook 示例库</a> · 27 <a href="examples/gallery/27-tpch.png">TPC-H 表结构 · report</a> · 28 <a href="examples/gallery/28-school.png">学校选课 · 手绘</a></sub></p>
<p align="center"><img src="examples/gallery/rows/12.png" alt="DiagramKit：星型模型 · 手绘、图书借阅、事件存储 · report" width="100%"></p>
<p align="center"><sub>29 <a href="examples/gallery/29-star-schema.png">星型模型 · 手绘</a> · 30 <a href="examples/gallery/30-library.png">图书借阅</a> · 31 <a href="examples/gallery/31-event-store.png">事件存储 · report</a></sub></p>

### 架构图

<p align="center"><img src="examples/gallery/rows/13.png" alt="DiagramKit：云上网络架构 · report、服务部署架构、政务平台总体架构 · 手绘" width="100%"></p>
<p align="center"><sub>32 <a href="examples/gallery/32-cloud-architecture.png">云上网络架构 · report</a> · 33 <a href="examples/gallery/33-service-architecture.png">服务部署架构</a> · 34 <a href="examples/gallery/34-platform-architecture.png">政务平台总体架构 · 手绘</a></sub></p>

### C4 模型

<p align="center"><img src="examples/gallery/rows/14.png" alt="DiagramKit：容器图：网上银行、容器图：分布式数据库 · report、系统上下文图" width="100%"></p>
<p align="center"><sub>35 <a href="examples/gallery/35-c4-containers-bank.png">容器图：网上银行</a> · 36 <a href="examples/gallery/36-c4-containers-tidb.png">容器图：分布式数据库 · report</a> · 37 <a href="examples/gallery/37-c4-context.png">系统上下文图</a></sub></p>

### 交易结构与合同关系

<p align="center"><img src="examples/gallery/rows/15.png" alt="DiagramKit：交易结构、合同体系、监管关系 · 手绘" width="100%"></p>
<p align="center"><sub>38 <a href="examples/gallery/38-transaction-structure.png">交易结构</a> · 39 <a href="examples/gallery/39-contract-system.png">合同体系</a> · 40 <a href="examples/gallery/40-supervision.png">监管关系 · 手绘</a></sub></p>

### 组织架构图

<p align="center"><img src="examples/gallery/rows/16.png" alt="DiagramKit：联合国系统、国务院组织机构 · report、公司治理结构 · 手绘" width="100%"></p>
<p align="center"><sub>41 <a href="examples/gallery/41-un-system.png">联合国系统</a> · 42 <a href="examples/gallery/42-state-council.png">国务院组织机构 · report</a> · 43 <a href="examples/gallery/43-governance.png">公司治理结构 · 手绘</a></sub></p>

### 思维导图

<p align="center"><img src="examples/gallery/rows/17.png" alt="DiagramKit：产品质量模型、HTTP 状态码 · report、项目管理知识体系 · 手绘" width="100%"></p>
<p align="center"><sub>44 <a href="examples/gallery/44-quality-model.png">产品质量模型</a> · 45 <a href="examples/gallery/45-http-status.png">HTTP 状态码 · report</a> · 46 <a href="examples/gallery/46-pmbok.png">项目管理知识体系 · 手绘</a></sub></p>

### 甘特图

<p align="center"><img src="examples/gallery/rows/18.png" alt="DiagramKit：实施进度计划、空间站建造任务 · report、版本生命周期 · 手绘" width="100%"></p>
<p align="center"><sub>47 <a href="examples/gallery/47-schedule.png">实施进度计划</a> · 48 <a href="examples/gallery/48-space-station.png">空间站建造任务 · report</a> · 49 <a href="examples/gallery/49-release-lifecycle.png">版本生命周期 · 手绘</a></sub></p>

### 时间线

<p align="center"><img src="examples/gallery/rows/19.png" alt="DiagramKit：登月计划、政策沿革 · 手绘" width="100%"></p>
<p align="center"><sub>50 <a href="examples/gallery/50-moon.png">登月计划</a> · 51 <a href="examples/gallery/51-policy.png">政策沿革 · 手绘</a></sub></p>

### 鱼骨图

<p align="center"><img src="examples/gallery/rows/20.png" alt="DiagramKit：上线延期的原因、737 MAX 事故成因 · report、出水超标原因 · 手绘" width="100%"></p>
<p align="center"><sub>52 <a href="examples/gallery/52-delivery-delay.png">上线延期的原因</a> · 53 <a href="examples/gallery/53-crash-causes.png">737 MAX 事故成因 · report</a> · 54 <a href="examples/gallery/54-total-nitrogen.png">出水超标原因 · 手绘</a></sub></p>

### 风险矩阵与象限图

<p align="center"><img src="examples/gallery/rows/21.png" alt="DiagramKit：风险矩阵、各省经济象限 · report、数据库象限 · 手绘" width="100%"></p>
<p align="center"><sub>55 <a href="examples/gallery/55-risk-matrix.png">风险矩阵</a> · 56 <a href="examples/gallery/56-provinces.png">各省经济象限 · report</a> · 57 <a href="examples/gallery/57-databases.png">数据库象限 · 手绘</a></sub></p>

### 桑基图

<p align="center"><img src="examples/gallery/rows/22.png" alt="DiagramKit：能源流向 · report、居民收支、碳收支 · 手绘" width="100%"></p>
<p align="center"><sub>58 <a href="examples/gallery/58-energy-flows.png">能源流向 · report</a> · 59 <a href="examples/gallery/59-household.png">居民收支</a> · 60 <a href="examples/gallery/60-carbon-budget.png">碳收支 · 手绘</a></sub></p>

### 矩形树图

<p align="center"><img src="examples/gallery/rows/23.png" alt="DiagramKit：财政支出构成、各国碳排放 · report、各省地区生产总值 · 手绘" width="100%"></p>
<p align="center"><sub>61 <a href="examples/gallery/61-budget.png">财政支出构成</a> · 62 <a href="examples/gallery/62-emissions.png">各国碳排放 · report</a> · 63 <a href="examples/gallery/63-provinces-gdp.png">各省地区生产总值 · 手绘</a></sub></p>

### 饼图、环形图与玫瑰图

<p align="center"><img src="examples/gallery/rows/24.png" alt="DiagramKit：饼图、环形图 · 手绘、玫瑰图 · report" width="100%"></p>
<p align="center"><sub>64 <a href="examples/gallery/64-pie.png">饼图</a> · 65 <a href="examples/gallery/65-donut.png">环形图 · 手绘</a> · 66 <a href="examples/gallery/66-rose.png">玫瑰图 · report</a></sub></p>

### 雷达图

<p align="center"><img src="examples/gallery/rows/25.png" alt="DiagramKit：空气质量、职业技能 · report、月降水量 · 手绘" width="100%"></p>
<p align="center"><sub>67 <a href="examples/gallery/67-air-quality.png">空气质量</a> · 68 <a href="examples/gallery/68-skills.png">职业技能 · report</a> · 69 <a href="examples/gallery/69-rainfall.png">月降水量 · 手绘</a></sub></p>

### 用户旅程图

<p align="center"><img src="examples/gallery/rows/26.png" alt="DiagramKit：报装流程体验、快递服务满意度 · report、申领福利的体验 · 手绘" width="100%"></p>
<p align="center"><sub>70 <a href="examples/gallery/70-connection.png">报装流程体验</a> · 71 <a href="examples/gallery/71-express.png">快递服务满意度 · report</a> · 72 <a href="examples/gallery/72-benefit-claim.png">申领福利的体验 · 手绘</a></sub></p>

### 看板

<p align="center"><img src="examples/gallery/rows/27.png" alt="DiagramKit：报告编制看板、提案状态看板 · report" width="100%"></p>
<p align="center"><sub>73 <a href="examples/gallery/73-report-board.png">报告编制看板</a> · 74 <a href="examples/gallery/74-peps.png">提案状态看板 · report</a></sub></p>

### 需求图

<p align="center"><img src="examples/gallery/rows/28.png" alt="DiagramKit：数据保护义务 · report、报告配图的需求 · 手绘" width="100%"></p>
<p align="center"><sub>75 <a href="examples/gallery/75-gdpr.png">数据保护义务 · report</a> · 76 <a href="examples/gallery/76-report-requirements.png">报告配图的需求 · 手绘</a></sub></p>

### 同一张图，六种文档风格

<p align="center"><img src="examples/gallery/rows/29.png" alt="DiagramKit：business、report、mono" width="100%"></p>
<p align="center"><sub>77 <a href="examples/gallery/77-style-business.png"><code>business</code></a> · 78 <a href="examples/gallery/78-style-report.png"><code>report</code></a> · 79 <a href="examples/gallery/79-style-mono.png"><code>mono</code></a></sub></p>
<p align="center"><img src="examples/gallery/rows/30.png" alt="DiagramKit：guofeng、soft、notebook" width="100%"></p>
<p align="center"><sub>80 <a href="examples/gallery/80-style-guofeng.png"><code>guofeng</code></a> · 81 <a href="examples/gallery/81-style-soft.png"><code>soft</code></a> · 82 <a href="examples/gallery/82-style-notebook.png"><code>notebook</code></a></sub></p>
<!-- /showcase -->

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
