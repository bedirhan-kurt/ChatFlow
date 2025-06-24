import {useRef} from "react";

/**
 * Scroller Component
 *
 * Responsibility:
 * This components is responsible for managing the scrolling behavior in a chat-area [section] application.
 * It ensures that the view scrolls to the bottom when new chat-area [section] are added.
 *
 * Features:
 * - Utilizes a `ref` to track the bottom of the message list.
 * - Can be extended to implement smooth scrolling to the bottom.
 *
 * Hooks:
 * - `useRef`: React hook used to create a reference to the bottom element.
 *
 * @components
 * @returns {JSX.Element} A div element that acts as a reference point for scrolling.
 */

export default function Scroller() {
    const bottomRef = useRef<HTMLDivElement>(null);

    // const scrollToBottom = () => {
    //     if (bottomRef.current) {
    //         bottomRef.current.scrollIntoView({behavior: "smooth"});
    //     }
    // };

    return (
        <div ref={bottomRef} className="h-0"></div>
    );
}