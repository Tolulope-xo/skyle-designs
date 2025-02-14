import React from "react";

const Header = () => {
  return (
    <div className="bg-[#0C0C0C] relative px-[20px] md:px-[80px] pb-[6rem]">
      <h2 className="uppercase relative font-AtypDisplay mt-[6rem] md:mt-[12rem] text-[40px] md:text-[70px] xl:text-[120px] leading-[41.4px] md:leading-[100.2px] xl:leading-[124.2px] font-[700] text-[white]">
        from a <br /> creative point
      </h2>
      <div className="flex flex-col md:flex-row max-w-[90%]  md:max-w-[100%] w-[100%] justify-between items-start md:items-center py-[2rem]">
        <h2 className="text-[white] w-[100%] md:w-[50vw] xl:w-[35vw]  font-Inter font-[400] text-[18px] leading-[24.75px]">
          Skyle® is a graphic and digital design agency, we help established
          brands and ambitious start-ups achieve their full potential with
          scalable design subscription.
        </h2>

        
        <div className="flex  flex-row gap-5 mt-[2rem] md:mt-0 z-10 ">
          <button className="border-2 font-Inter text-[black]  hover:text-[white]  hover:bg-transparent border-[white] bg-[white] rounded-[15px] h-[54px] w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]">
            Start a project
          </button>
          <button className="border-2 font-Inter text-[white] border-[white] bg-none hover:text-[black]  hover:bg-[white] rounded-[15px] h-[54px] w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]">
            See plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
