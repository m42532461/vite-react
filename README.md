# vite-react

## 介紹

此為參考[Lama](https://github.com/safak/youtube/tree/mern-ecommerce-app/client)製作之 RWD電商網站 project，除電腦使用者外手機使用者也可以有良好使用體驗，電商網站基礎功能如購物車、Stripe結帳、註冊、登入、輸入email訂閱最新資訊、商品分類、Filter篩選、價格高到低或新舊Sort皆已包含在內，下一步完善方向為增加更多 animation進一步提升使用者體驗(目前僅有部分 animation)，另也建議搭配 [dashboard 後台](https://github.com/m42532461/admin-dashboard)一起看

前端使用 React框架 + Vite架構，比起 create-react-app建立更為輕量的架構，CSS部分使用 Tailwind CSS當作練習，資料來自[後端 api](https://github.com/m42532461/eCommerceAPI)



## 如何啟用

需安裝 [node.js](https://nodejs.org/zh-tw/download/)，下載 code後進入本資料夾，先執行```npm i```下載所需 module，並執行```npm run dev```，進入其路徑即可看到畫面

![執行npm run dev後結果](https://upload.cc/i1/2022/10/05/vVjb5k.jpg)

如上圖中的 __"http://127.0.0.1:5173/"__

__注意__ : 需搭配其後端 api，否則頁面抓不到資料，請參考[後端 README](https://github.com/m42532461/eCommerceAPI)。

## Stripe

如要測試Stripe，信用卡卡號請填4242 4242 4242 4242，月/年跟CVC隨意填寫，請參考[Stripe Testing](https://stripe.com/docs/testing)

## 部分畫面

![Home畫面](https://upload.cc/i1/2022/10/06/n7AJg1.png)

![登入註冊及結帳](https://upload.cc/i1/2022/10/06/9bcZgC.png)
