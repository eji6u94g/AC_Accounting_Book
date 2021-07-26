# Expense Tracker
利用Node.js + Express打造的簡易支出記帳網站
1. 首頁
![image](https://github.com/eji6u94g/AC_Expense_tracker/raw/main/public/imgs/index.PNG)

2. 新增頁
![image](https://github.com/eji6u94g/AC_Expense_tracker/raw/main/public/imgs/new.PNG)

3. 編輯頁
![image](https://github.com/eji6u94g/AC_Expense_tracker/raw/main/public/imgs/edit.PNG)

## Features - 專案功能描述
* 總覽所有支出的名稱、分類和支出金額
* 選擇支出的分類進行支出記錄的篩選，篩選後會看到該類別支出記錄和篩選後的總金額
* 新增一筆支出記錄
* 修改任一筆支出記錄的內容
* 刪除任一筆支出記錄

## Prerequisites - 環境建置與需求

1. [Node.js](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/)

## Installation and Execution - 安裝與執行步驟
1.打開終端機，使用git clone將專案下載至本地資料夾
```
git clone https://github.com/eji6u94g/AC_Expense_tracker.git
```

2.進入專案資料夾
```
cd AC_Expense_tracker
```

3.安裝專案需求套件
```
npm install
```
4.執行 seeder檔案
```
npm run seed
```
終端機出現 ```Category seed data is created.``` 和 ```Record seed data is created.```, 表示seed資料已成功輸入, 按下ctrl+c結束執行

5.執行以下檔案

```
npm run dev
```

6.當 terminal 出現以下字樣，表示app.js已執行成功

```
App is running on http://localhost:3000
Mongodb is connected!
```

7.現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 使用記帳本



