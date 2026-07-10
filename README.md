# React + TypeScript + Vite Modern Template

TypeScript 7.0 の高速な型システム、最速の Linter である **oxlint**、環境一元管理ツール **mise**、そして GitHub Actions による **E2E & GitベースVRT（視覚回帰テスト）** を完備した、2026年基準の超高速・堅牢なフロントエンド開発テンプレートです。

## 🚀 特徴

- **⚡️ 超高速ツールチェーン**: `Vite` + `oxlint` による瞬時のビルド＆静的解析。
- **🛑 TS 7.0 思想の厳格な型チェック**: `moduleResolution: "Bundler"`、`noUncheckedIndexedAccess` などを標準有効化。エイリアス不要のクリーンな依存解決。
- **📌 開発環境の一元管理 (`mise`)**: Node.js や pnpm のバージョンを `mise.toml` でローカル・CI 共に完全固定。
- **📷 外部サービス不要の Gitベース VRT**: Playwright を使用し、UI の変更（差分）を検知すると CI が最新のスクショを PR に自動コミットバック（`[skip ci]` 制御付き）。

---

## 🛠️ 開発の始め方

### 1. 前提条件

ローカル環境に [mise](https://mise.jdx.dev/) がインストールされていることを確認してください。

### 2. セットアップ & 起動

```bash
# 適切なバージョンの自動インストール
mise install

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```
