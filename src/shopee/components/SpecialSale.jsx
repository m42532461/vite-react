import React from "react";
import Timer from "./Timer";
import Timer2 from "./Timer2";
const SpecialSale = () => {
  let specialSaleHTML = [
    {
      href: "/flash_sale?fromItem=1350145325&promotionId=111410506092544",
      discount: 7.5,
      img: "https://cf.shopee.tw/file/1013d41fe75178081aa7e74a614229da_tn",
      price: 2779,
      sold: 5,
      width: 94,
    },
    {
      href: "/flash_sale?fromItem=158220308&promotionId=111410506092544",
      discount: 2.7,
      img: "https://cf.shopee.tw/file/16477b97b88d25af03d40f3317809103_tn",
      price: 69,
      sold: 18,
      width: 99,
    },
    {
      href: "/flash_sale?fromItem=9569516579&promotionId=111410506092544",
      discount: 7.1,
      img: "https://cf.shopee.tw/file/c109d78e81421baff6f4bb582cd2dae1_tn",
      price: 4980,
      sold: 0,
      width: 100,
    },
    {
      href: "/flash_sale?fromItem=13042079720&promotionId=111410506092544",
      discount: 8,
      img: "https://cf.shopee.tw/file/7619aed3bda4a8d4498aba415521d9aa_tn",
      price: 390,
      sold: 0,
      width: 100,
    },
    {
      href: "/flash_sale?fromItem=1007659595&promotionId=111410506092544",
      discount: 7.9,
      img: "https://cf.shopee.tw/file/82e4a1543bd4b71794fb1af8d16a3650_tn",
      price: 31,
      sold: 0,
      width: 100,
    },
    {
      href: "/flash_sale?fromItem=13692221976&promotionId=111410506092544",
      discount: 6.9,
      img: "https://cf.shopee.tw/file/3954eb050be5392e445b361efb91c5af_tn",
      price: 518,
      sold: 18,
      width: 82,
    },
  ];
  return (
    <div className="main_card">
      <div className="flex flex-col">
        <div className="flex justify-between px-[15px]">
          <img src="" alt="限時特賣" />
          <Timer2 />
        </div>
        <div className="flex">
          {specialSaleHTML.map((item, index) => (
            <div className="flex flex-col px-[15px] relative items-center">
              <div
              // className={`bg-[url('../../../../public/assets/shopeeSale1.png')] bg-cover border h-[170px] w-[170px] z-10`}
              >
                <div className="border relative w-[170px] h-[170px]">
                  <div className=" z-0">
                    <img
                      src="../../../../public/assets/shopeeSale1.png"
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="z-20">
                    <img
                      src={item.img}
                      alt=""
                      className="z-20 absolute top-0 left-0"
                    />
                  </div>
                </div>
              </div>
              <span className="text-[#EE4D2D] font-medium">${item.price}</span>
              <div className="text-[#EE4D2D] absolute top-0 right-4 z-50 text-sm ">
                {item.discount}折
              </div>
              <div className="w-[136px] text-[12px] h-5 text-white bg-orange-200 rounded-full relative">
                <div className="w-1/2 rounded-l-full h-full bg-orange-500">
                  <span className="w-[136px] text-center absolute">
                    已售出{item.sold}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialSale;
