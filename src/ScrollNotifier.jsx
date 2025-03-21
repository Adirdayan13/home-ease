import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        window.parent.postMessage("iframeScrolledToBottom", "*");
        document.body.style.overscrollBehavior = "contain"; // Prevent rubber-band effect
      } else {
        document.body.style.overscrollBehavior = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // No UI rendering
};

export default ScrollNotifier;