const CardPrimary = ({
  children,
  className = "",
  borderActive = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`
        mx-1 max-w-[100px] max-h-[100px] cursor-pointer border rounded-lg p-1 
        flex justify-center items-center ${
          borderActive ? " border-black " : "border-[#DDDDDD]"
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default CardPrimary;
