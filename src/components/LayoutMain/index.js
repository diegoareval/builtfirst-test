import { useSmoothScrollPage } from "../../hooks/useSmoothScrollPage";
import Header from "./Header";

/**
 * It's a function that returns a div with a header, main, and footer
 * @returns A function that returns a component
 */
const LandingPageLayout = ({ children }) => {
  useSmoothScrollPage();
  return (
    <div className="font-Rubik">
      <Header />
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default LandingPageLayout;
