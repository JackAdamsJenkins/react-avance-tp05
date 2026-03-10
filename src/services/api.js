// --- MOCK API ---
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
    const response = await fetch(API_URL);
    return await response.json();
}