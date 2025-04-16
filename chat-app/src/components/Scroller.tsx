import {useRef} from "react";

export default function Scroller() {
    // Responsible for scrolling view to bottom when new messages are added

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