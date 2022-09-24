import { useEffect } from "react";

export const useSmoothScrollPage = () => {
  useEffect(() => {
    // smooth scroll to top on page change (only if user is not on the top)
    const scrollToTop = () => {
      if (window.pageYOffset > 0) {
        // scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    // scroll to top on page change
    scrollToTop();
  }, []);
};
