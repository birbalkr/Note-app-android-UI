import axios from "axios";
const apibaseURL = "https://notesappbackend-g552.onrender.com/api/auth"

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${apibaseURL}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}