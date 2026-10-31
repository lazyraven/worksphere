
// const API_URL = 'http://localhost:5000/api';
const API_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(endPoint, options = {}) {

    // Step 5.2.1
    // Why are we changing this?
    // Previously, we manually passed the Authorization header.
    // Now every authenticated API request can automatically include the token.
    // Ex: apiRequest('/profile/me');

    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${endPoint}`,
        {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
                ...(token && {
                    Authorization: `Bearer ${token}`
                })
            },
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