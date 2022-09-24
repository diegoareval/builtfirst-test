const Description = ({ text = "", className = "" }) => (
  <p
    className={`text-xl leading-tight mt-4 lg:text-2xl lg:mt-8 xl:text-4xl ${className}`}
  >
    {text}
  </p>
);

export default Description;
