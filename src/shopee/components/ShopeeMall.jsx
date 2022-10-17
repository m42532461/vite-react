import React from "react";
const ShopeeMall = () => {
  const left = [
    "https://cf.shopee.tw/file/f2f16ba2edd49ec989a414b30a9b20b9",
    "https://cf.shopee.tw/file/3562b96d045ba1dac590f0631aeebe31",
    "https://cf.shopee.tw/file/103ca6402b9b25dbb9f6132179696b1e",
  ];
  const shopeeMall = [
    {
      id: 0,
      href: " ",
      img: "https://cf.shopee.tw/file/9a0d71a388e16ae13c897e981202fa94_xhdpi",
      title: "玩具特賣會3折起",
    },
    {
      id: 1,
      href: "/lancome.tw",
      img: "https://cf.shopee.tw/file/fa0779abf43d313292f4c66be41ac5a6_xhdpi",
      title: "蘭蔻官方全館9折 ",
    },
    {
      id: 2,
      href: "/popmartofficial.tw",
      img: "https://cf.shopee.tw/file/1a3175ba3756992ff2523c2a3c81cb47_xhdpi",
      title: "關注領券折$50",
    },
    {
      id: 3,
      href: "/google.tw",
      img: "https://cf.shopee.tw/file/fbd6ac3dc6a4cca6d0fcb883198e7bb7_xhdpi",
      title: "Pixel 7 系列上市 ",
    },
    {
      id: 4,
      href: "/adidas_taiwan",
      img: "https://cf.shopee.tw/file/cfc1faeca0569226a1947dca785a2e3f_xhdpi",
      title: "4折up2件再8折",
    },
    {
      id: 5,
      href: "/lovepetzoo",
      img: "https://cf.shopee.tw/file/6b60fad3022847d8f39bf7a4bba0cc22_xhdpi",
      title: "精選飼料買一送一 ",
    },
    {
      id: 6,
      href: "/senao.tw",
      img: "https://cf.shopee.tw/file/ac507a46cfb200b750a80fd1ed06f4ac_xhdpi",
      title: "最強3C領券再折",
    },
    {
      id: 7,
      href: "/watsons_taiwan",
      img: "https://cf.shopee.tw/file/8e7279799e69c4132d640464eabc5171_xhdpi",
      title: "領券折$50 ",
    },
    {
      id: 8,
      href: "/dyson.tw",
      img: "https://cf.shopee.tw/file/4619bd595a5d0cc7d058baff9a47c4c0_xhdpi",
      title: "全館蝦幣10%回饋",
    },
    {
      id: 9,
      href: "/queenshop.tw",
      img: "https://cf.shopee.tw/file/f996d1256997dcd27f1306df3d96a7f1_xhdpi",
      title: "全館下殺7折up ",
    },
    {
      id: 10,
      href: "/dr.wu_s_tw",
      img: "https://cf.shopee.tw/file/45b66c2fcca6db45d4805ee3d3d26939_xhdpi",
      title: "領券最高再折$800",
    },
    {
      id: 11,
      href: "/tplink_taiwan",
      img: "https://cf.shopee.tw/file/905c53723752780a5c049495412cf5e0_xhdpi",
      title: "下單滿額再抽PS5 ",
    },
    {
      id: 12,
      href: "/coolpc",
      img: "https://cf.shopee.tw/file/8d312641379090eaa46f624ae5755b07_xhdpi",
      title: "超品日全館7折起",
    },
    {
      id: 13,
      href: "/aumu8888",
      img: "https://cf.shopee.tw/file/5914f53ac18561ad97c61bd8d23a38f9_xhdpi",
      title: "NO.1控油抗痘洗面乳 ",
    },
    {
      id: 14,
      href: "/icon99",
      img: "https://cf.shopee.tw/file/cdd851cdfcb38d9172b2ce05ea7eb561_xhdpi",
      title: "瘋搶5折卷",
    },
  ];
  return (
    <div className="main_card">
      <div className="flex justify-between px-5 h-[61px] items-center text-[#D0011B]">
        <div className="flex">
          <div className="border-r pr-[15px] text-[17px]">蝦皮商城</div>
          <div className="px-[15px] text-[#333333] text-[16px]">15天鑑賞期</div>
          <div className="pr-[15px] text-[#333333] text-[16px]">蝦皮安心退</div>
          <div className="pr-[15px] text-[#333333] text-[16px]">正品保障</div>
        </div>
        <div className="">{"查看更多 >"}</div>
      </div>
      <div className="flex">
        <div className="left w-[400px] flex-1">
          <img
            src="https://cf.shopee.tw/file/604e131b0b7c6f4afad7016eb100c3b8"
            alt=""
            className="w-[390px]"
          />
        </div>
        <div className="right flex flex-wrap overflow-hidden flex-2">
          {shopeeMall.map((item) => (
            <div className=" grid w-[200px]" key={item.id + 1}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopeeMall;
