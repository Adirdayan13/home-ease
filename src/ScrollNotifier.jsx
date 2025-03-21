import { useEffect } from "react";

const ScrollNotifier = () => {
    useEffect(() => {
        const handleTouchEnd = () => {
            const scrollableElement = document.documentElement || document.body;
            const atBottom = scrollableElement.scrollHeight - scrollableElement.scrollTop <= scrollableElement.clientHeight + 5;

            if (atBottom) {
                window.parent.postMessage({ type: "iframeReachedBottom" }, "*");
            }
        };

        window.addEventListener("touchend", handleTouchEnd);
        return () => window.removeEventListener("touchend", handleTouchEnd);
    }, []);

    return null;
};

export default ScrollNotifier;
