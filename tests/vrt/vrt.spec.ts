import { test, expect } from "@playwright/test";

test("Visual Regression Test - Top Page", async ({ page }) => {
  // 開発サーバーのURL（デフォルトは http://localhost:5173）
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // VRT（スクリーンショット比較）を実行
  await expect(page).toHaveScreenshot("top-page.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.01, // 1%未満のピクセル差分は許容
  });
});
