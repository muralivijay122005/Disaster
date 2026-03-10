import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';

export default function Dashboard() {
    const { events, loading, error } = useEvents();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        PulseNet Dashboard
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Real-time disaster risk monitoring — Chennai • Delhi • Mumbai
                    </p>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {loading ? (
                    <div className="text-center py-20 text-gray-500 text-lg">
                        Loading recent events...
                    </div>
                ) : error ? (
                    <div className="text-center py-20 text-red-600 text-lg">
                        {error}
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-20 text-gray-600 text-lg">
                        No risk events detected in the recent period
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {events.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}