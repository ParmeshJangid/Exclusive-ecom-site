import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Smoothly scroll to the top of the page when the user navigates to a new page
      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    // Only scroll if the user is not already at the top
    if (window.scrollY > 0) {
      handleScroll();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
