import { useEffect, useState } from 'react';

export function useDottedBackgroundStyle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkClass = () =>
            document.documentElement.classList.contains('dark');

        const observer = new MutationObserver(() => {
            setIsDarkMode(checkDarkClass());
        });

        setIsDarkMode(checkDarkClass());

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return {
        backgroundImage: isDarkMode
            ? 'radial-gradient(circle, rgba(100, 100, 100, 0.3) 2px, transparent 0px)'
            : 'radial-gradient(circle, rgba(237, 237, 237, 0.6) 2px, transparent 0px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0',
    };
}