import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const iframeDoc = document.documentElement;
      const scrollTop = iframeDoc.scrollTop;
      const scrollHeight = iframeDoc.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        // Notify parent that iframe has reached the bottom
        window.parent.postMessage({ type: "iframeReachedBottom" }, "*");

        // Prevent further scrolling inside the iframe
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollNotifier;