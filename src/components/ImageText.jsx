export const ImageText = ({ order, imgDesktop, imgMobile, title, text }) => {
  return (
    <div className={`${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px]`}>
      <picture className="absolute top-0 z-[-1]">
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="imagen servicio"/>
      </picture>
      
        <h2 className="text-center font-fraunces text-[28px] text-dark-desaturated-cyan mb-6">{title}</h2>
        <p className="text-center font-barlow text-dark-desaturated mx-3 mb-[60px] tablet:text-sm lg:w-[300px] lg:mx-auto">{text}</p>
      </div>
    
  );
};
