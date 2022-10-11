import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="px-[200px] flex flex-col py-[48px]">
      <div className="flex w-[1280px] h-[584px] justify-center relative">
        <img
          src="https://www.starbucks.com.tw/home/objects/images/221005/banner_pc_01@2x.jpg"
          alt=""
        />
        <div className="z-20 h-full w-full absolute left-0 top-0">
          <div className="flex flex-col items-center w-[493px] absolute top-[200px]">
            <span className="text-[44px] font-extrabold text-[#003300]">
              南瓜風味 探索秋日味蕾
            </span>
            <span className="text-[44px] font-extrabold font-mono text-[#003300]">
              HELLO, PUMPKIN
            </span>
          </div>
          <div className="w-[256px] items-center justify-start flex flex-col absolute right-[531px] bottom-0 h-[100px] text-center font-semibold text-[#003300]">
            <span className="text-[20px]">南瓜派風味那堤</span>

            <span className="text-[20px]">Pumpkin Spice Latte</span>
          </div>
          <div className="w-[250px] items-center justify-start flex flex-col absolute right-[281px] bottom-0 h-[100px] text-center font-semibold text-[#003300]">
            <span className="text-[20px]">南瓜派風味冷萃咖啡</span>

            <span className="text-[20px]">
              Pumpkin Spice Cream
              <br />
              Cold Brew Coffee
            </span>
          </div>
          <div className="w-[281px] items-center justify-start flex flex-col absolute right-0 bottom-0 h-[100px] text-center font-semibold text-[#003300]">
            <span className="text-[20px]">
              南瓜派風味
              <br />
              咖啡星冰樂
            </span>
            <span className="text-[20px]">Pumpkin Spice Frappuccino</span>
          </div>
        </div>
      </div>
      <div className="flex relative w-[1280px] mt-10 h-[374px]">
        <img
          src="https://www.starbucks.com.tw/home/objects/images/220913/banner_pc_mobile-order-pay.jpg"
          alt=""
        />
        <img
          src="https://www.starbucks.com.tw/home/objects/images/220913/banner_pc_mobile-order-pay_text-block.svg"
          alt=""
          className="z-20 h-full w-full absolute left-0 top-0"
        />
      </div>
      <div className="flex relative w-[1280px] mt-10 h-[584px]">
        <img
          src="https://www.starbucks.com.tw/home/objects/images/221005/banner_pc_open.jpg
          "
          alt=""
        />
        <img
          src="https://www.starbucks.com.tw/home/objects/images/221005/banner_pc_open_text-block.svg"
          alt=""
          className="z-20 h-full w-full absolute left-0 top-0"
        />
      </div>
      <div className="flex w-[1280px] mt-10 h-[373px] justify-center relative">
        <img
          src="https://www.starbucks.com.tw/home/objects/images/220721/banner_pc_online-redeem@2x.jpg"
          alt=""
        />
        <div className="z-20 h-full w-1/2 absolute right-0 top-0 flex flex-col items-center justify-center font-semibold">
          <span className=" text-center text-[40px] text-white my-2">
            金星禮 新功能
            <br />
            線上兌換與回饋轉贈
          </span>
          <span className="text-center text-[24px] text-white my-5">
            用星星兌換 獎勵自己或與好友分享
            <br />
            為生活添加驚喜與感動
          </span>
          <Button title={"了解詳情"} />
        </div>
      </div>
      <div className="flex w-[1280px] h-[387px] mt-10  bg-[#1E3932]">
        <div className="flex flex-col flex-1 items-center justify-center">
          <img
            src="https://www.starbucks.com.tw/home/objects/images/200916/msr.svg"
            alt=""
            className="  w-[320px] h-[142px]"
          />
          <h2 className="text-white text-4xl font-semibold mb-5">
            美好旅程 從星開始
          </h2>
          <div>
            <Button title="立即加入" /> <Button title="登入" />
          </div>
        </div>
        <div className="flex-1 bg-[#00704A]">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://www.starbucks.com.tw/home/objects/images/200916/goldreward.svg"
              alt=""
              className="mt-20"
            />
            <h2 className="text-white text-[40px] font-semibold mb-5">
              星禮程 金星禮
            </h2>
            <span className=" text-2xl text-white font-semibold">
              專屬你的金星禮，享受驚喜回饋
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[1280px] mt-10 relative">
        <img
          src="https://www.starbucks.com.tw/home/objects/images/220815/banner_pc_06@2x.jpg"
          alt=""
          className=""
        />
        <div className="z-20 h-full w-1/2 absolute left-0 top-0 flex flex-col items-center justify-center">
          <h2 className=" text-center text-[40px]  text-[#003300] mb-5 font-semibold">
            2022最佳星服務票選活動
          </h2>
          <Button title="了解詳情" color="003300" />
        </div>
      </div>
      <div className="flex w-[1280px] mt-10">
        <div className="flex-1 w-1/2 mr-2 bg-[#005E37]">
          <img
            src="https://www.starbucks.com.tw/home/objects/images/220721/bannrt_borrow-a-cup@3x.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center p-12">
            <span className="text-white text-[40px] mb-3 font-semibold">
              星巴克循環杯
            </span>
            <span className="text-white text-[24px] font-medium">
              減少一次性使用，為地球盡一份心力!
            </span>
            <div className="mt-[32px]">
              <Button title="租借使用須知" color="FFF" />
            </div>
          </div>
        </div>
        <div className="flex-1 w-1/2 bg-[#D4E9E2]">
          <img
            src="https://www.starbucks.com.tw/home/objects/images/211129/bannrt_delivery@2x.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center p-12">
            <span className="text-[#1E3932] text-[40px] mb-3 font-semibold">
              今天 想來點星巴克
            </span>
            <span className="text-[#1E3932] text-[24px] font-medium">
              上外送平台點購，咖啡為你直送到手
            </span>
            <div className="mt-[32px]">
              <Button title="了解詳情" color="1E3932" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
