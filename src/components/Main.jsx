import imgMobile from  "../assets/images/mobile/image-header.jpg"
import imgDesktop from  "../assets/images/desktop/image-header.jpg"
import arrow from "../assets/images/icon-arrow-down.svg"

import React from "react";

export default function Main() {
  return (
    <main>
      <picture>
        <source media="(max-widht:639px)" srcSet={imgMobile}/>
        <source media="(min-width:640px)" srcSet={imgDesktop}/>
        <img src={imgMobile} alt="backgrounh header" />
      </picture>
      <p className="absolute font-fraunces text-[40px] uppercase tracking-[6.25px] text-white text-center w-[327px] top-[144px] left-0 right-0 mx-auto 
      
      sm:w-[600px] before:"> We are creatives</p>
      <img className="absolute top-[294px] left-0 right-0 mx-auto 
      sm:top-[220px]" src={arrow} alt="" />
    </main>
  );
}
