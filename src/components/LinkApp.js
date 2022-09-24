import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const getUrlFormat = (type = "", url = "") => {
  switch (type) {
    case "link":
      return url;
    case "externalLink":
      // add https:// if not exist
      if (typeof url === "string" && !url.startsWith("http")) {
        return `https://${url}`;
      }
      return url;
    case "mailto":
      return `mailto:${url}`;
    case "tel":
      return `tel:${url}`;
    default:
      return "";
  }
};

const LinkApp = ({
  children,
  className,
  aProps,
  href,
  type = "link",
  onClick,
  ...rest
}) => (
  <>
    {type === "link" ? (
      <Link
        {...rest}
        to={`${getUrlFormat(type, href)}`}
        className={`flex items-center gap-1 md:gap-2 font-medium leading-4 hover:underline hover:text-blue-dark-light ${className}`}
      >
        <div {...aProps}>{children}</div>
      </Link>
    ) : (
      <div
        {...rest}
        className={`flex items-center gap-1 md:gap-2 font-medium leading-4 hover:underline hover:text-blue-dark-light ${className}`}
      >
        <a
          {...aProps}
          href={`${getUrlFormat(type, href)}`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </div>
    )}
  </>
);

LinkApp.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  aProps: PropTypes.object,
  href: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default LinkApp;
