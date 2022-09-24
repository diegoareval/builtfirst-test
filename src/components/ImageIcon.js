export const ICONS = {
  instagram: "instagram",
  twitter: "twitter",
  google: "google",
  snapchat: "snapchat",
  tiktok: "tiktok",
  facebook: "facebook",
  search: "search",
  userDefault: "userDefault",
  filterIcon: "filterIcon",
  arrowDown: "arrowDown",
  arrowSwiperLeft: "arrowSwiperLeft",
};

const ImageIcon = ({ nameIcon, alt = "", className = "", ...rest }) => (
  <img
    {...rest}
    className={`${className}`}
    src={require(`../assets/icons/${nameIcon}.svg`)}
    alt={alt}
  />
);

export default ImageIcon;
