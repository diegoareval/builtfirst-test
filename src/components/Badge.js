const Badge = ({ label = "", className = "", onClick = () => {} }) => (
  <div
    onClick={onClick}
    className={`bg-black text-white rounded-full p-0 m-0 h-6 flex items-center justify-center ${
      label?.length > 2 ? "w-auto px-2" : "w-6 px-0"
    } ${className}`}
  >
    {label}
  </div>
);

export default Badge;
