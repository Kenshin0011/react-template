# React + TypeScript + Vite Modern Template

A modern React starter powered by **Vite**, **TypeScript**, **Panda CSS**, **Ark UI**, **Storybook**, **Vitest**, **Playwright**, and **GitHub Actions**.

Designed for building fast, type-safe, accessible, and scalable applications with a modern developer experience.

## ✨ Features

### ⚡ Modern Stack

- React 19
- TypeScript
- Vite

### 🎨 UI

- Panda CSS (Zero-runtime CSS-in-JS)
- Ark UI (Headless & Accessible Components)
- Storybook

### ✅ Quality

- Oxlint
- TypeScript Strict Mode
- Vitest
- React Testing Library

### 🧪 Testing

- Unit Tests (Vitest)
- Storybook Interaction Tests
- Playwright E2E
- Playwright Visual Regression Tests (VRT)

### 🚀 Developer Experience

- mise
- pnpm
- Lefthook
- GitHub Actions

---

# Getting Started

## Requirements

- mise

or

- Node.js
- pnpm

## Installation

```bash
mise install

pnpm install
```

## Development

```bash
pnpm dev
```

---

# Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start development server |
| `pnpm build`      | Production build         |
| `pnpm preview`    | Preview production build |
| `pnpm lint`       | Run Oxlint               |
| `pnpm format`     | Auto fix using Oxlint    |
| `pnpm type-check` | TypeScript type checking |
| `pnpm check-all`  | Lint + Type Check        |

## Testing

| Script                 | Description             |
| ---------------------- | ----------------------- |
| `pnpm test`            | Vitest (Watch Mode)     |
| `pnpm test:run`        | Run Unit Tests          |
| `pnpm test:ui`         | Vitest UI               |
| `pnpm test:coverage`   | Coverage Report         |
| `pnpm test:e2e`        | Playwright E2E          |
| `pnpm test:vrt`        | Visual Regression Tests |
| `pnpm test:vrt:update` | Update Snapshots        |

## Storybook

```bash
pnpm storybook
```

Build Storybook

```bash
pnpm build-storybook
```

---

# Project Structure

```text
src/
├── components/
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.stories.tsx
│       │   ├── Button.test.tsx
│       │   └── index.ts
│       └── Accordion/
│
├── tests/
│   └── setup.ts
│
└── App.tsx

tests/
├── e2e/
└── vrt/

.storybook/
```

---

# CI

GitHub Actions includes workflows for:

- ✅ Lint
- ✅ Type Check
- ✅ Unit Tests (Vitest)
- ✅ Playwright E2E
- ✅ Visual Regression Tests
- ✅ Storybook Build

---

# Tech Stack

- React
- TypeScript
- Vite
- Panda CSS
- Ark UI
- Storybook
- Vitest
- Playwright
- Oxlint
- mise
- pnpm
- GitHub Actions
