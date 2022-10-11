import React from "react";
import Slider from "./Slider";

const Banner = () => {
  const leftBanner = [
    {
      id: 1,
      bg: "",
      title: 1,
      img: "https://cf.shopee.tw/file/645a57d2caf1ffabb673f400b0f480cf_xxhdpi",
      desc: 1,
    },
    {
      id: 2,
      bg: "",
      title: 2,
      img: "https://cf.shopee.tw/file/d5aaaff03b279c172524bb9fd9a38a11_xxhdpi",
      desc: 2,
    },
    {
      id: 3,
      bg: "",
      title: 3,
      img: "https://cf.shopee.tw/file/2f16672efac3cd0bcf193db180697e89_xxhdpi",
      desc: 3,
    },
    ,
  ];
  const activitiesHTML = `<div class="xZ4bbg"><a href="/m/topshop"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/ce50fa24d20a4ede15b274ef9edbb1c9_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">免運！蝦皮直送</div></div></a><a href="/m/fmcgzone"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/1990775389f894698439986a90c4b528_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">蝦皮超市</div></div></a><a href="/m/vouchers-1002"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/87450719f9b585e8ac7208497d3ce2bf_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">領滿千折百券</div></div></a><a href="/m/electronicthree"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/e10b596140a70640ecc094df3dd924e9_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">整點搶1折券</div></div></a><a href="/mall"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/d2ee82271d7691089274a15f1abf9683_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">蝦皮商城</div></div></a><a href="/m/free-shipping"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/5a3d2832faa69c48b0dfe0be914f0f22_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">領6張免運券</div></div></a><a href="/m/groupbuy"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/1363daaffeba55b1d4c8c40492dc9e24_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">蝦皮團購</div></div></a><a href="/m/everydayCCB"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/9b090e230bb2bfa6db876724fdff2d32_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">蝦幣回饋</div></div></a><a href="/m/superdeals"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/7627dd07e42f84ba9bfeb5d28becbcca_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">蝦皮超便宜</div></div></a><a href="/campaigns"><div class="KYggX9" style="width: 100px;"><div class="_2Ehn-F ybDQTz"><div class="n-CE6j dNmwQY"><div class="_5l6amx edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/1ce9f21065d71b41ea1f760e32247859_xhdpi&quot;); background-size: contain; background-repeat: no-repeat;"></div></div></div><div class="KSe2W7 TF67TG">最強活動合集</div></div></a></div>`;
  const activitiesURL = activitiesHTML
    .split("&quot;")
    .filter((ele, index) => index % 2 === 1);
  const activitiesNames = activitiesHTML
    .split("</div></div></a>")
    .map((name) => name.split(`<div class="KSe2W7 TF67TG">`)[1]);
  let activities = [];
  for (let i = 0; i < activitiesNames.length; i++) {
    activities.push({ name: activitiesNames[i], url: activitiesURL[i] });
  }
  console.log(activities);
  return (
    <div className=" py-5">
      <div className="flex">
        <div className="left flex flex-2 pr-1.5">
          <Slider data={leftBanner} />
        </div>
        <div className="right flex-1 flex flex-col justify-between">
          <img
            className="h-[115px]"
            src="https://cf.shopee.tw/file/dec8ac487883866bd172cab468618d71_xhdpi"
            alt=""
          />
          <img
            className="h-[115px]"
            src="https://cf.shopee.tw/file/192128d5744ca65704ce656b0f37b1b8_xhdpi"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between py-5">
        {activities.map(
          (activity) =>
            activity.name !== undefined && (
              <div className="flex flex-col justify-center items-center">
                <img src={activity.url} className="w-[45px] h-[45px]" />
                <span className="text-xs">{activity.name}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Banner;
