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
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <img src="" alt="限時特賣" />
          <Timer2 />
        </div>
        <div className="flex">
          {specialSaleHTML.map((item, index) => (
            <div className="flex flex-col">
              <div
                className={`w-[300px] h-[300px] bg-[url('../../../../public/assets/shopeeSale1.png')] bg-cover border`}
              >
                <div className="h-[85%] border">
                  <img src={item.img} alt="" className="h-full" />
                </div>
              </div>
              <span>{item.price}</span>
              <span>{item.discount}</span>
              <span>已售出{item.sold}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialSale;
