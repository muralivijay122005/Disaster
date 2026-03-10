const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function fetchEvents() {
    try {
        const response = await fetch(`${API_BASE}/events`);
        if (!response.ok) {
            throw new Error(`Server responded ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Events fetch error:', err);
        throw err;
    }
}