import AppContainer from "../AppContainer";
import Image from "../Image";
import ImageIcon from "../ImageIcon";
import LinkApp from "../LinkApp";

const links = [
  {
    name: "Builtfirst",
    link: "/marketplace",
  }
];

const LinksHeaders = () => (
  <div className="hidden md:flex gap-4 lg:gap-7">
    {links.map((item) => (
      <LinkApp
        className="opacity-50 text-lg hover:opacity-60 hover:no-underline"
        key={item.id}
        href={item.link}
        type="link"
      >
        <div className="flex items-center gap-2">
          {item?.icon && <ImageIcon className="h-4 w-4" nameIcon={item.icon} />}
          {item.name}
        </div>
      </LinkApp>
    ))}
  </div>
);

const Header = () => {


  return (
    <header className="w-screen py-6 shadow-sm sticky top-0 bg-white z-10">
      <AppContainer className="flex items-center justify-between gap-10 w-full">
        <div className="flex items-center gap-4 lg:gap-7 flex-1">
          <LinkApp href={"/"}>
            <Image src={"https://uploads-ssl.webflow.com/6064cfcc58945d3a58e0f2b3/606511dff0f309b4b7bad4e3_Logo.svg"} />
          </LinkApp>
          <LinksHeaders />
        </div>
      </AppContainer>
    </header>
  );
};

export default Header;
