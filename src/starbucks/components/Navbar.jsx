import React from "react";

const Navbar = () => {
  return (
    <div className=" pt-[15px] bg-[#f7f7f7] w-full flex justify-center">
      <div className="w-[1280px] flex justify-between">
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
              {
                title: "夥伴招募",
                logo: "../../../public/assets/vacant.png",
                index: 1,
              },
              {
                title: "門市查詢",
                logo: "../../../public/assets/location.png",
                index: 2,
              },
            ].map((item) => (
              <li
                key={item.index}
                className="flex text-[15px] justify-center items-center ml-4"
              >
                <img src={item.logo} alt="logo" className="w-[18px] h-[18px]" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
