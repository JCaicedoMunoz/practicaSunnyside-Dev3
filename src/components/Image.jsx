export const Image = ({ order="", imgMobile, imgDesktop }) => {
  return (
    <picture className={order}>
      <source media="(min-width:640px)" srcSet={imgDesktop} />
      <img src={imgMobile} alt="imagen servicio" className="w-full" />
    </picture>
  );
};
