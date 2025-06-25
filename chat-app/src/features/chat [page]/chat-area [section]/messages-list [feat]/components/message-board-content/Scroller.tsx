import React, { useEffect, useRef } from "react";

export default function Scroller({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [children]);

    return (
        <div className={`overflow-y-auto h-full ${className}`}>
            {children}
            <div ref={bottomRef} />
        </div>
    );
};
