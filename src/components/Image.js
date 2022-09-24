import useBooleanToggler from "../hooks/useBooleanToggler";

const Image = ({ src = "", alt = "", className = "", ...rest }) => {
  const { isToggled: isLoaded, reToggle: onLoaded } = useBooleanToggler();
  return (
    <img
      {...rest}
      className={`${className} ${isLoaded ? "" : "min-h-[200px]"}`}
      src={src}
      alt={alt}
      draggable={false}
      loading="lazy"
      onLoad={onLoaded}
    />
  );
};

export default Image;
