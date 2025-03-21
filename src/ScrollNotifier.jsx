import { useEffect } from "react";

const ScrollNotifier = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Check if user has reached the bottom of the iframe
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        // Send message to the parent window
        window.parent.postMessage("iframeScrolledToBottom", "*");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Scroll Inside the Iframe</h1>
      <p>Scroll to the bottom to notify the parent page.</p>
    </div>
  );
};

export default ScrollNotifier;