import { useState, useEffect } from 'react';
import { fetchEvents } from '../api/events';

export function useEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadEvents = async () => {
        setLoading(true);
        try {
            const data = await fetchEvents();
            setEvents(data || []);
            setError(null);
        } catch (err) {
            setError(err.message || 'Failed to load events');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEvents();

        const interval = setInterval(loadEvents, 30000); // auto-refresh every 30s
        return () => clearInterval(interval);
    }, []);

    return {
        events,
        loading,
        error,
        refresh: loadEvents
    };
}