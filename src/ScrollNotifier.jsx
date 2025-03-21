import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleTouchMove = (event) => {
      const iframeDoc = document.documentElement;
      const scrollTop = iframeDoc.scrollTop;
      const scrollHeight = iframeDoc.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        // Notify parent that iframe reached the bottom
        window.parent.postMessage("iframeReachedBottom", "*");

        // Prevent further scrolling inside the iframe (fix for iOS)
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, []);

  return null;
};

export default ScrollNotifier;
