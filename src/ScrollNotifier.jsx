import { useEffect } from "react";

const ScrollNotifier = () => {
    useEffect(() => {
        const handleScrollOrTouchEnd = () => {
            const scrollableElement = document.body;
            const atBottom = scrollableElement.scrollHeight - scrollableElement.scrollTop <= scrollableElement.clientHeight + 5;
            console.log('adir', { scrollableElement, atBottom})
            if (atBottom) {
                window.parent.postMessage({ type: "iframeReachedBottom" }, "*");
            }
        };

        window.addEventListener("touchend", handleScrollOrTouchEnd);
        window.addEventListener("scroll", handleScrollOrTouchEnd);
        return () => {
            window.removeEventListener("touchend", handleScrollOrTouchEnd);
            window.removeEventListener("scroll", handleScrollOrTouchEnd);
        };
    }, []);

    return null;
};

export default ScrollNotifier;
