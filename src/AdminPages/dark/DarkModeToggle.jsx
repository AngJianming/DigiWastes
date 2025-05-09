import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
    // Initialize state with user's preferred color scheme
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage first, then check system preference
        return localStorage.getItem('darkMode') === 'true' ||
            (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // Apply dark mode class to document body when darkMode changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <button
            type="button"
            className="icon-button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? (
                <FiSun className='icon-nav-img icon-nav' />
            ) : (
                <FiMoon className='icon-nav-img icon-nav' />
            )}
        </button>
    );
};

export default DarkModeToggle;