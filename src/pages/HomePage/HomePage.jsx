import React from 'react';
import { Link } from 'react-router-dom';
import { PreviewDrinks } from '../../components/Drinks/PreviewDrinks';

import imageSrc from './img/asr_blue_iced_tea_4203516a_f9a0_4011_b97a_c7044eabc27f 1.png';
import imageSrc1 from './img/Ellipse 222.png';
import imageSrc2 from './img/Ellipse.png';
import imageSrc3 from './img/Ellipse 224.png';
function HomePage() {
  return (
    <div>
      <div className="mb-[123px]">
        <div className="lg:w-[715px] lg:h-[330px] lg:mt-[185px] lg:ml-[100px]">
          <h1
            className="title relative font-semibold text-3xl leading-tight  ml-[20px] mt-[152px] mr-[20px] z-10 
        md:text-[56px] md:font-semibold md:ml-[32px] md:mr-[95px]
        lg:font-semibold lg:text-[64px] lg:leading-tight lg:m-0"
          >
            Craft Your Perfect Drink with Drink Master
          </h1>
          <p
            className="relative font-custom font-normal text-base leading-[143%] text-[14px] ml-5 mr-5 mt-4 z-10
        md:ml-8 md:mr-[117px] md:mt-7 md:text-[18px] md:text-lg leading-[133%]
        lg:pt-[28px] lg:text-[18px] lg:leading-[133%] lg:m-0 lg:pr-56 lg:pb-10"
          >
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world's
            finest beverages.
          </p>

          <Link
            className="relative rounded-[42px] w-[151px] h-[46px] bg-[#f3f3f3] ml-[20px] mt-[32px] flex justify-center items-center font-semibold text-[16px] leading-[112%] text-[#161f37] z-10
          md:ml-[32px] md:mt-[48px]
          lg:font-semibold lg:text-base lg:leading-[112%] lg:rounded-[42px] lg:cc lg:h-[54px] lg:m-0"
            to="/add-drink"
          >
            Add Drink
          </Link>
        </div>
        <img
          src={imageSrc}
          alt=""
          className="relative w-[252px] h-[313px] top-[47px] mb-[112px] ml-[62px] mr-[61px] z-10 
        md:w-[359px] md:h-[445px] md:ml-[205px] md:mt-[54px]
        lg:absolute lg:top-[128px] lg:right-[136px] lg:m-0"
        />

        <img src={imageSrc1} alt="" className="absolute top-0 left-0 z-1" />
        <img
          src={imageSrc2}
          alt=""
          className="absolute top-[426px] right-[-50px] bottom-0 right-0 z-1
        md:right-[-20px] md:top-[414px]"
        />

        <img
          src={imageSrc3}
          alt=""
          className=" hidden lg:block lg:absolute lg:top-[203px] lg:left-[660px] lg:right-[193px] lg:z-1"
        />
      </div>
      <PreviewDrinks />
    </div>
  );
}

export default HomePage;
