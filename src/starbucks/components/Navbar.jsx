import React from "react";

const Navbar = () => {
  return (
    <div className="px-[200px] pt-[15px] bg-[#f7f7f7] flex justify-between ">
      <div className="flex items-end pb-[18px]">
        <img
          src="https://upload.cc/i1/2022/10/10/FAEvVQ.png
"
          className="w-[62px] h-[62px]"
          alt=""
        />
        <div className="flex ">
          {[
            "咖啡",
            "商品",
            "門市",
            "星禮程",
            "第四生活空間",
            "送禮專區",
            "線上門市",
          ].map((item, index) => (
            <div key={index + 1} className="px-[15px]">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start">
        <ul className="flex">
          {[
            { title: "夥伴招募", logo: "", index: 1 },
            { title: "門市查詢", logo: "", index: 2 },
          ].map((item) => (
            <li key={item.index} className="flex">
              <img src={item.logo} alt="logo" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
