const ButtonPrimary = ({
  title = "click me!",
  onClick = () => {},
  className = "",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`w-full h-[70px] px-4 bg-black text-white text-md rounded-lg truncate ${className} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
