# 東京輕旅行指南 / Tokyo Travel Guide

網頁程式設計期中專題，使用 **HTML、CSS、原生 JavaScript**，沒有使用任何框架或外部程式庫。

## 如何開啟

1. 解壓縮 ZIP。
2. 在資料夾內雙擊 `index.html`，或用 VS Code 開啟專案。
3. 頁面上方可以在四個頁面間切換。

## 網頁內容

- `index.html`：首頁、四個景點介紹（2 x 2 CSS Grid）。
- `spots.html`：淺草、澀谷、上野公園和東京鐵塔。
- `itinerary.html`：三日行程表，按按鈕切換每天的詳細行程。
- `budget.html`：飯店住宿提醒，並輸入天數、人數、各項費用計算預估總旅費。

## 程式檔案

- `css/style.css`：四頁共用的排版、顏色與手機版樣式。
- `js/main.js`：兩個互動功能（行程切換與旅費計算）。
- `assets/*.svg`：自行繪製的東京主題插畫。
- `assets/*.jpg`：首頁、三日行程、飯店與預算頁使用的圖片，包含首頁四個景點的實際照片。

## 預算計算方式

預設「N 天 N-1 晚」，以每人估算費用計算：

`總費用 = 人數 × ((天數 - 1) × 每晚住宿費 + 天數 × (每日餐飲 + 每日交通 + 每日景點費))`

預設數字為示範資料，並非即時報價，也不包含機票、保險與購物費。

## 旅遊資料參考

- [GO TOKYO 官方旅遊網站](https://www.gotokyo.org/en/)
- [GO TOKYO 三天東京行程](https://www.gotokyo.org/en/story/walks-and-tours/best-of-tokyo/index.html)
- [Tokyo Metro 官方票券說明](https://www.tokyometro.jp/en/ticket/travel/index.html)

景點資訊及票價、營業時間可能隨時改變，出發前應再查官方最新資訊。
