
// const API_URL = 'http://localhost:5000/api';
const API_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(endPoint, options = {}) {
    const response = await fetch(`${API_URL}${endPoint}`,
        {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        }
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || 'Something went wrong'
        );
    }
    return data;
}