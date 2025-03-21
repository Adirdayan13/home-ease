import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        // Send message to parent when iframe reaches the bottom
        window.parent.postMessage("iframeScrolledToBottom", "*");
        document.body.style.overflow = "hidden"; // Prevent further iframe scrolling
      } else {
        document.body.style.overflow = "auto"; // Restore scrolling inside iframe
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollNotifier;
