import React from "react";

const Categories = () => {
  let total = [
    {
      href: "/女生衣著-cat.11040766",
      img: "https://cf.shopee.tw/file/17f3879a1872099681d7b85101e187db_tn",
      word: "女生衣著",
    },
    {
      href: "/書籍及雜誌期刊-cat.11041120",
      img: "https://cf.shopee.tw/file/b1edb3defd6f3d59016fe881f6b9aab5_tn",
      word: "書籍及雜誌期刊",
    },
    {
      href: "/男生衣著-cat.11040730",
      img: "https://cf.shopee.tw/file/e47ff35a61d8e74bd3a54bbf1f65952c_tn",
      word: "男生衣著",
    },
    {
      href: "/居家生活-cat.11040925",
      img: "https://cf.shopee.tw/file/7f7b2a96de6739539bdf9b00108784c0_tn",
      word: "居家生活",
    },
    {
      href: "/運動-健身-cat.11040840",
      img: "https://cf.shopee.tw/file/1f86527d394e356d78a41c17108ec212_tn",
      word: "運動/ 健身",
    },
    {
      href: "/美食、伴手禮-cat.11040483",
      img: "https://cf.shopee.tw/file/4a20aaebe71427b3141fbaa186aaec16_tn",
      word: "美食、伴手禮",
    },
    {
      href: "/男女鞋-cat.11041795",
      img: "https://cf.shopee.tw/file/99ed4f6ef9a452a49c4070756d0048fb_tn",
      word: "男女鞋",
    },
    {
      href: "/汽機車零件百貨-cat.11041308",
      img: "https://cf.shopee.tw/file/41e63c17a4e0412883fac61d94592268_tn",
      word: "汽機車零件百貨",
    },
    {
      href: "/女生配件-黃金-cat.11041224",
      img: "https://cf.shopee.tw/file/1e4fbb940b5f4230458162f615a947b4_tn",
      word: "女生配件/ 黃金",
    },
    {
      href: "/遊戲王-cat.11040812",
      img: "https://cf.shopee.tw/file/2ce3822327a87bd4e3e96a131e5ea082_tn",
      word: "遊戲王",
    },
    {
      href: "/美妝保健-cat.11041691",
      img: "https://cf.shopee.tw/file/227ec8335e695172de26c637ec8f8697_tn",
      word: "美妝保健",
    },
    {
      href: "/娛樂、收藏-cat.11041645",
      img: "https://cf.shopee.tw/file/1071d365b731ef6e2619699c3b6d3492_tn",
      word: "娛樂、收藏",
    },
    {
      href: "/嬰幼童與母親-cat.11040542",
      img: "https://cf.shopee.tw/file/ee4b2cc17b24a6d00f522f0a52624982_tn",
      word: "嬰幼童與母親",
    },
    {
      href: "/寵物-cat.11040647",
      img: "https://cf.shopee.tw/file/253830d7b66ebfc16b976c2f26643fa8_tn",
      word: "寵物",
    },
    {
      href: "/女生包包-精品-cat.11041292",
      img: "https://cf.shopee.tw/file/a9fd9ed0217c33044cb15573f28ea805_tn",
      word: "女生包包/ 精品",
    },
    {
      href: "/手機平板與周邊-cat.11041546",
      img: "https://cf.shopee.tw/file/508706d0720263ce8ee415bce40d0d33_tn",
      word: "手機平板與周邊",
    },
    {
      href: "/男生包包與配件-cat.11041163",
      img: "https://cf.shopee.tw/file/e7edce689c35c47dc2ef0b5642fc0813_tn",
      word: "男生包包與配件",
    },
    {
      href: "/3C與筆電-cat.11041390",
      img: "https://cf.shopee.tw/file/c62e3d24ff3082424c0d1267508a1df9_tn",
      word: "3C與筆電",
    },
    {
      href: "/戶外-旅行-cat.11042412",
      img: "https://cf.shopee.tw/file/f83aeaa75e9081b1f19b92d4b70f616c_tn",
      word: "戶外/旅行",
    },
    {
      href: "/家電影音-cat.11047569",
      img: "https://cf.shopee.tw/file/7cc775aebb62745cd5c881d9bbff25a6_tn",
      word: "家電影音",
    },
  ];
  let firstRow = [];
  let secondRow = [];
  total.map((item, index) => {
    if (index % 2 === 0) firstRow.push(item);
    else secondRow.push(item);
  });
  console.log(firstRow);
  console.log(secondRow);
  return (
    <div className="bg-white main_card">
      <div className="my-5 ml-5">
        <span className="text-gray-400">分類</span>
      </div>
      <div>
        <div className="grid grid-cols-10 grid-flow-row">
          {firstRow.map((item, index) => (
            <div
              className=" h-[150px] flex flex-col justify-center items-center border pt-3 pb-5"
              key={index}
            >
              <img src={item.img} alt="" className="w-[83.3px] h-[88.05px]" />
              <span className="text-sm">{item.word}</span>
            </div>
          ))}
          {secondRow.map((item, index) => (
            <div
              className=" h-[150px] flex flex-col justify-center items-center border pt-3 pb-5"
              key={index}
            >
              <img src={item.img} alt="" className="w-[83.3px] h-[88.05px]" />
              <span className="text-sm">{item.word}</span>
            </div>
          ))}
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Categories;
