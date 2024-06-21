export const Text = ({ order, title, text, color }) => {
  return (
    <div className={`${order} text-center h-[437px] px-6 flex flex-col place-content-around py-6 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr[105px]`}>
      <h2 className="font-fraunces text-[2rem] font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight">{title}</h2>
      <p className="font-barlow text-dark-blue text-lg leading-[1.875rem] tablet:text-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px]">{text}</p>
      <div className="relative mt-4">
        <button className="uppercase font-fraunces lg:text-1xl">Learn More</button>
        <div className={`absolute w-[137px] h-[10px] ${color} rounded-full left-1/2 transform -translate-x-1/2 bottom-0 -z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px]` }></div>
      </div>
    </div>
  );
};
