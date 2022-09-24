const TitlePrimary = ({ title = "", className = "" }) => (
  <h1 className={`text-3xl lg:text-4xl xl:text-7xl leading-tight ${className}`}>
    {title}
  </h1>
);

export default TitlePrimary;
