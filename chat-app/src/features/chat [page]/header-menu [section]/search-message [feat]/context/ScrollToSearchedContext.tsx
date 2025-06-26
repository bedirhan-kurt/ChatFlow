import React, {createContext, useState} from "react";

interface ScrollToSearchedContext {
    searchMessageId: string;
    scrollToSearchedMessage: (messageId: string) => void;
}

const ScrollToSearchedContext = createContext<ScrollToSearchedContext | undefined>(undefined);

export function ScrollToSearchedProvider({children}: {children: React.ReactNode}) {
    const [searchMessageId, setSearchMessageId] = useState<string>("");

    function scrollToSearchedMessage(messageId: string) {
        setSearchMessageId(messageId);
        const element = document.getElementById(messageId);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "center"});

            // First add the transition classes
            element.classList.add("transition-colors", "duration-3000");

            // Then add the background color (small delay to ensure transition is applied)
            setTimeout(() => {
                if (element) {
                    element.classList.add("bg-amber-100");
                }
            }, 10);

            // After 3 seconds, remove only the background color class
            setTimeout(() => {
                if (element) {
                    element.classList.remove("bg-amber-100");

                    // Remove transition classes after the transition completes
                    setTimeout(() => {
                        if (element) {
                            element.classList.remove("transition-colors", "duration-3000");
                        }
                    }, 3000);
                }
            }, 3000);
        }
    }


    return (
        <ScrollToSearchedContext.Provider value={{searchMessageId, scrollToSearchedMessage}}>
            {children}
        </ScrollToSearchedContext.Provider>
    );
}

export {ScrollToSearchedContext};
