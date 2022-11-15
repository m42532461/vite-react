import React from "react";
import Quote from "../assets/Quote.png";
const Services = () => {
  return (
    <div
      className="flex flex-col items-center w-[1712px] pt-[90px] pb-[121px]"
      id="service"
    >
      <div className="flex justify-end">
        <span className="text-[24px] font-medium w-[40%] text-[#445944]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          deleniti deserunt distinctio quos aliquid quaerat dolorum ducimus
          autem. Et asperiores sed animi modi iusto illo voluptatibus eius,
          dicta consequatur? Architecto?
        </span>
        <h1 className="text-[64px] font-black pl-24 pr-[130px]">Services</h1>
      </div>
      <div className="flex w-full gap-[61px] text-white pt-[157px] pb-[142px]">
        <div className="flex-1 ">
          <div className="w-full mt-[30px] bg-Dark-Grey pb-[41px] pt-10 px-10 rounded-[20px] flex flex-col items-center gap-[30px]">
            <h2 className="text-[36px] font-black text-[#445964]">Cargo</h2>
            <span className="text-[24px] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              vitae nesciunt neque ipsam unde accusantium perspiciatis minima
              inventore atque temporibus. Tenetur optio consequatur facilis
              consectetur doloribus voluptatibus qui, dolor voluptatem!
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full bg-Grey pb-[41px] pt-10 px-10 rounded-[20px] flex flex-col items-center gap-[30px]">
            <h2 className="text-[36px] font-black text-[#263138]">Cargo</h2>
            <span className="text-[24px] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              vitae nesciunt neque ipsam unde accusantium perspiciatis minima
              inventore atque temporibus. Tenetur optio consequatur facilis
              consectetur doloribus voluptatibus qui, dolor voluptatem!
            </span>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="w-full mt-[30px] bg-Dark-Grey pb-[41px] pt-10 px-10 rounded-[20px] flex flex-col items-center gap-[30px]">
            <h2 className="text-[36px] font-black text-[#445964]">Cargo</h2>
            <span className="text-[24px] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              vitae nesciunt neque ipsam unde accusantium perspiciatis minima
              inventore atque temporibus. Tenetur optio consequatur facilis
              consectetur doloribus voluptatibus qui, dolor voluptatem!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3 gap-7">
        <div className="w-full flex justify-center">
          <img src={Quote} alt="" />
        </div>
        <span className="text-[36px] font-black">
          “Aprender é a unica coisa que a mente não se cansa, nunca tem medo e
          nunca se arrepende”
        </span>
        <h2 className="text-[36px] font-black text-[#263138]">
          ~Leonardo da Vinci
        </h2>
      </div>
    </div>
  );
};
export default Services;
