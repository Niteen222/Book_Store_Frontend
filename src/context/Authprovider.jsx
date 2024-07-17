import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [book, setBook] = useState([]);
    const [authuser, setAuthuser] = useState(false);
    const [buyData, setBuyData] = useState({ cart: [] });

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data); 
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBook();
    }, []);

    useEffect(() => {
        if (book.length > 0) {
            setBuyData((prevBuyData) => ({
                ...prevBuyData,
                book: book,
            }));
        }
    }, [book]);

    return (
        <AuthContext.Provider value={{ authuser, setAuthuser, buyData, setBuyData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
