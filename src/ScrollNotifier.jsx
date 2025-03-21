import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // If user has reached the bottom of the iframe
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        window.parent.postMessage("iframeScrolledToBottom", "*");
      }
    };

    const handleTouchMove = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        window.parent.postMessage("iframeScrolledToBottom", "*");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null; // Render nothing
};

export default ScrollNotifier;