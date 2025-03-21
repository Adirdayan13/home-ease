import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        // Notify the parent that the iframe has reached the bottom
        window.parent.postMessage({ type: "iframeReachedBottom" }, "*");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // No UI rendering
};

export default ScrollNotifier;