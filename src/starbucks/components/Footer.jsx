import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
  const link = [
    {
      title: "認識我們",
      subTitle: [
        { title: "關於星巴克", href: "" },
        { title: "企業責任", href: "" },
        { title: "企業公告", href: "" },
        { title: "星聞室", href: "" },
      ],
      index: 1,
    },
    {
      title: "夥伴招募",
      subTitle: [
        { title: "夥伴招募", href: "" },
        { title: "成為我們的夥伴", href: "" },
        { title: "我們的福利", href: "" },
        { title: "發展晉升與專業學習", href: "" },
      ],
      index: 2,
    },
    {
      title: "社群平台",
      subTitle: [
        { title: "Facebook", href: "" },
        { title: "Instagram", href: "" },
        { title: "YouTube", href: "" },
        { title: "LINE", href: "" },
      ],
      index: 3,
    },
    {
      title: "顧客關懷",
      subTitle: [
        { title: "常見問題", href: "" },
        { title: "我在星巴克的小故事", href: "" },
        { title: "網路謠言澄清說明", href: "" },
      ],
      index: 4,
    },
  ];
  return (
    <>
      <div className="bg-[#f0f0f0] w-full flex flex-col items-center border-[3px] border-white  font-semibold">
        {/* Socail Media */}
        <div className="w-[1280px] flex py-[25px] ">
          {[
            { title: "facebook", img: "../../../public/assets/facebook.png" },
            { title: "instagram", img: "../../../public/assets/instagram.png" },
            { title: "youtube", img: "../../../public/assets/youtube.png" },
            { title: "line", img: "../../../public/assets/line.png" },
          ].map((item) => (
            <img
              src={item.img}
              alt={item.title}
              className=" w-[30px] h-[30px] mr-4"
            />
          ))}
        </div>
      </div>
      <div className="bg-[#f0f0f0] w-full flex flex-col items-center pb-[40px] font-semibold">
        {/* Link */}
        <div className="flex justify-between w-[1280px] py-[30px]">
          {link.map((item) => {
            return (
              <div key={item.index} className="flex-1">
                <h2 className="text-[19px] text-[#382F2D] pb-2 font-semibold">
                  {item.title}
                </h2>
                {item.subTitle.map((sub, index) => {
                  return (
                    <div key={item.index + index} className="pt-2">
                      <a
                        className="text-[15px] text-[#3D3935]  font-semibold"
                        href={sub.href}
                      >
                        {sub.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="flex-1 scale-75 flex justify-end items-start -translate-y-6">
            <img src="../../../../public/assets/starbucks.jpg" alt="" />
          </div>
        </div>
        {/* DownSide */}
        <div className="w-[1280px] text-[#666666]">
          <div className="text-[16px] pb-2">
            <a href="" className="border-r border-[#666666] pr-2">
              網站地圖
            </a>
            <a href="" className="border-r border-[#666666] pr-2 pl-2">
              個人資料保護政策
            </a>
            <a href="" className="border-r border-[#666666] pr-2 pl-2">
              使用條款與須知
            </a>
            <a href="" className="border-r border-[#666666] pr-2 pl-2">
              聯絡我們 Customer Service
            </a>
            <a href="" className=" pl-1">
              客服專線 0800-000-482(服務時間:周一至周五
              09:00-18:00，六日與國定假日除外)
            </a>
          </div>
          <div className="text-[13px]">
            <span>© 2022 Starbucks Coffee Company. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
