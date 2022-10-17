import React from "react";

const HotSale = () => {
  const data = [
    {
      img: "https://cf.shopee.tw/file/4ebb8e8db52971995ff3dee046c675ae",
      title: "10.10品牌週年慶",
    },
    {
      href: "/top_products?catId=TW_BITL0_28%3Atop_sold",
      img: "https://cf.shopee.tw/file/a9adffc98797a60aa48ffb3fe60f7fc1",
      sold: "月銷售 30萬+",
      title: "醫療用口罩",
    },

    {
      href: "/top_products?catId=TW_BITL0_1%3Atop_sold",
      img: "https://cf.shopee.tw/file/e78336c16ab59623d0d1910aab72a24d",
      sold: "月銷售 18萬+",
      title: "拋棄式口罩",
    },

    {
      href: "/top_products?catId=TW_BITL0_17%3Atop_sold",
      img: "https://cf.shopee.tw/file/c589e8a359fad1faea49d06cc02051df",
      sold: "月銷售 15萬+",
      title: "iphone滿版保護貼",
    },

    {
      href: "/top_products?catId=TW_BITL0_43%3Atop_sold",
      img: "https://cf.shopee.tw/file/4ba678a672d0698992eeb54336989804",
      sold: "月銷售 15萬+",
      title: "彩色口罩",
    },
    {
      href: "/top_products?catId=TW_BITL0_1467%3Atop_sold",
      img: "https://cf.shopee.tw/file/8d9aea610892d623a3f3b5f7d35d593f",
      sold: "月銷售 9萬+",
      title: "衛龍 零食",
    },
  ];
  console.log(data);
  return (
    <div className="main_card">
      <div className="">熱門商品</div>
      <div className="flex">
        {data.map((item) => (
          <div>
            <img src={item.img} alt="" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSale;
