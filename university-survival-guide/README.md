# UNI GUIDE｜大學生存指南

Web Programming Midterm Project (2026)

這是一個使用**原生 HTML、CSS、JavaScript**完成的四頁靜態網站，不需要安裝 React、Bootstrap、jQuery 或其他框架。

## 網站內容

| 檔案 | 頁面 | 主要內容 |
| --- | --- | --- |
| `index.html` | 首頁 | 網站介紹、2×2 內容格、新生清單 |
| `study.html` | 課業規劃 | 讀書建議表格、互動讀書時數工具 |
| `food.html` | 飲食生活 | 三餐建議、一天花費示例表格 |
| `quiz.html` | 生存測驗 | 四題測驗、即時計分和重置 |
| `css/style.css` | 共用樣式 | 顏色、排版、hover、手機版調整 |
| `js/main.js` | JavaScript | 兩個獨立的 DOM 互動功能 |
| `images/` | 圖片 | 四張專案自製插畫（PNG） |

## 在 VS Code 打開

1. 下載並解壓縮專案 ZIP。
2. 開啟 VS Code → **File → Open Folder**，選擇 `University-Survival-Guide`。
3. 在檔案總管中找到 `index.html`，右鍵選擇 **Open with Live Server**（如果有安裝），或直接雙擊用 Chrome 開啟。
4. 點選上方導覽列切換四個頁面。

注意：這個網站不需要 CMake、Node.js 或 Python 才能讓訪客使用。

## 上傳到 GitHub

先到 GitHub **New repository** 建立一個 Public repository，例如 `university-survival-guide`。

在 VS Code 的終端機，確認目前位於 `University-Survival-Guide` 資料夾，再輸入：

```bash
git init
git add .
git commit -m "Complete web programming midterm project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/university-survival-guide.git
git push -u origin main
```

把 `YOUR_USERNAME` 換成自己的 GitHub 使用者名稱。若之前已經設定過 Git，請勿重複 `git init` 或 `git remote add origin`，依現有專案狀況操作。

也可以直接在 GitHub repository 頁面選 **Add file → Upload files**，把專案檔案和 `css/`、`js/`、`images/` 資料夾上傳到 repository **根目錄**。`index.html` 必須在根目錄。

## 啟用 GitHub Pages

1. 開啟你的 repository → **Settings** → **Pages**。
2. 在 **Build and deployment** 選 **Deploy from a branch**。
3. 選擇 `main`、`/(root)`，按 **Save**。
4. 等待部署完成，網址通常是：`https://YOUR_USERNAME.github.io/university-survival-guide/`。
5. 使用無痕模式檢查首頁、所有導覽連結、圖片和兩個互動功能。

## 兩個 JavaScript 功能怎麼測

**讀書時數規劃器**（`study.html`）：輸入「程式設計」和 `4` → 加入 → 總計變成「4 小時」→ 刪除 → 變回「0 小時」。

**知識測驗**（`quiz.html`）：沒有完成四題時按送出 → 顯示提醒。依序選 `B / A / C / B` → 100 分。按重新作答 → 結果恢復初始訊息。

## 提交與口試提醒

老師要求交 GitHub Repository URL、GitHub Pages URL、Code Explanation Report PDF。

- PDF 內的個人反思，請依自己實際遇到的困難和學到的內容修改成自己的說法。
- PDF 內應放上**你自己在 Chrome 打開網站後的實際截圖**；圖片插畫不是瀏覽器截圖。
- 口試可練習解釋 `getElementById()`、`addEventListener()`、`preventDefault()`、`textContent`、`createElement()` 和 `FormData()`。
- 日期：2026 年 11 月 16 日 11:59pm 前（依老師公布時間）。

## 原創與授權

網站文字和四張 PNG 插畫為本專案製作。沒有使用外部 JavaScript 程式庫，也沒有使用網路載入的圖片。首頁另外提供教育部官方網站超連結作為校外資訊入口。
