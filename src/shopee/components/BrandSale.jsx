import React from "react";
const brandSaleHTML = `<div class="PfPqK9"><a class="of0m4s" href="/shop/56678703"><div class="n-CE6j"><div class="jf1xh5 edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/db37eec79a7b7d0087a8f77062e8e6de&quot;); background-size: contain; background-repeat: no-repeat;"></div></div><div class="hFajqg"><img class="ZnMh8e" src="https://cf.shopee.tw/file/048bd082a350cbc4812176d2528f90d6"></div><div class="UapOEP"><div class="iiVnOh" style="color: rgb(208, 2, 27);">狂撒8折神券</div></div></a><a class="of0m4s" href="/shop/1778234"><div class="n-CE6j"><div class="jf1xh5 edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/466a29665671266f11c031d45b8a821c&quot;); background-size: contain; background-repeat: no-repeat;"></div></div><div class="hFajqg"><img class="ZnMh8e" src="https://cf.shopee.tw/file/9ac3581e632fd71c858dc163f1426024"></div><div class="UapOEP"><div class="iiVnOh" style="color: rgb(208, 2, 27);">熱銷維生素6折起</div></div></a><a class="of0m4s" href="/shop/20601737"><div class="n-CE6j"><div class="jf1xh5 edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/af2ff9ecf4f4fb83585cb59b1afbb73d&quot;); background-size: contain; background-repeat: no-repeat;"></div></div><div class="hFajqg"><img class="ZnMh8e" src="https://cf.shopee.tw/file/7f627c71c59b761acbf2b8a436a96c63"></div><div class="UapOEP"><div class="iiVnOh" style="color: rgb(208, 2, 27);">限時瘋搶8折券</div></div></a><a class="of0m4s" href="/shop/70001183"><div class="n-CE6j"><div class="jf1xh5 edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/4e6236b03e9c09eb58023a717513bed2&quot;); background-size: contain; background-repeat: no-repeat;"></div></div><div class="hFajqg"><img class="ZnMh8e" src="https://cf.shopee.tw/file/963f38e0284761f7bec5b587ee6dbb14"></div><div class="UapOEP"><div class="iiVnOh" style="color: rgb(208, 2, 27);">保濕專家 歡慶5折</div></div></a><a class="of0m4s" href="/shop/56675615"><div class="n-CE6j"><div class="jf1xh5 edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/22cfd0e909e5c818a8703d2d2599f4f8&quot;); background-size: contain; background-repeat: no-repeat;"></div></div><div class="hFajqg"><img class="ZnMh8e" src="https://cf.shopee.tw/file/b0270bc779a964e0c8b8771b3cb5b465"></div><div class="UapOEP"><div class="iiVnOh" style="color: rgb(208, 2, 27);">保濕M89 換季必備</div></div></a><a class="of0m4s" href="/shop/87595371"><div class="n-CE6j"><div class="jf1xh5 edy5hG" style="background-image: url(&quot;https://cf.shopee.tw/file/6e7444e535794c8a7754e88f3c1c6e4e&quot;); background-size: contain; background-repeat: no-repeat;"></div></div><div class="hFajqg"><img class="ZnMh8e" src="https://cf.shopee.tw/file/8f5d7901367a7ab4e5055b0e4115aec7"></div><div class="UapOEP"><div class="iiVnOh" style="color: rgb(208, 2, 27);">熱銷鋁箱 現折200</div></div></a></div>`;
const brandSaleDiv = brandSaleHTML.split(`<a class="of0m4s"`).slice(1);
// console.log(brandSaleDiv);
const getWordBetween = (wholeString, a, b) => {
  const processFront = wholeString.split(a)[1];
  const processEnd = processFront.split(b)[0];
  return processEnd;
};
let brandSale = [];
console.log(getWordBetween(brandSaleDiv[0], `url(&quot;`, `&quot;)`));
for (let div of brandSaleDiv) {
  brandSale.push({
    link: getWordBetween(div, `href="`, `"><div class="n-CE6j">`),
    bg: getWordBetween(div, `url(&quot;`, `&quot;)`),
    img: getWordBetween(div, `src="`, `"></div><div class="UapOEP">`),
    word: getWordBetween(div, `rgb(208, 2, 27);">`, "</div></div></a>"),
  });
}
console.log(brandSale);
console.log(
  "https://cf.shopee.tw/file/4a0e12b9d96726b1dc500dd7637d4531".split(`"`)[0]
);
const BrandSale = () => {
  return (
    <div className="w-auto">
      <img
        src="https://cf.shopee.tw/file/4a0e12b9d96726b1dc500dd7637d4531"
        alt=""
      />
      <div className=" bg-[url('https://cf.shopee.tw/file/179a4584ae9a3135fa28379b80ee7d3a')] px-5">
        <div className="flex justify-between">
          <span className="text-white">天天搶9折券!</span>
          <button className="text-white">查看更多</button>
        </div>
        <div className="flex justify-center items-center py-10">
          {brandSale.map((brand, index) => (
            <div
              className="flex flex-col p-2 justify-center bg-white mr-[1px]"
              key={index + 1}
            >
              <div className="flex ">
                <div
                  key={brand.href}
                  className={` bg-[url('${
                    brand.bg.split(`"`)[0]
                  }')] flex flex-col bg-cover w-[162px] h-[162px] justify-center items-center `}
                ></div>
              </div>
              <div className="flex flex-col justify-center items-center -translate-y-8 h-[40px]">
                <div className="rounded-full border w-4/5 justify-center flex">
                  <img src={brand.img} className="h-[56px] overflow-hidden" />
                </div>
                <span className="text-red-700 mt-3">{brand.word}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSale;
