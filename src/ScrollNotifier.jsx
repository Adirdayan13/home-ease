import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        window.parent.postMessage("iframeScrolledToBottom", "*");
      }
    };

    const handleTouchEnd = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        window.parent.postMessage("iframeScrolledToBottom", "*");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchend", handleTouchEnd); // Touchend triggers when user stops scrolling

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return null; // Nothing is rendered
};

export default ScrollNotifier;