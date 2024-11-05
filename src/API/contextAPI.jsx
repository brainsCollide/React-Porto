import { createContext, useContext, useState, useEffect} from "react";

const ThemeContext = createContext();
    
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);