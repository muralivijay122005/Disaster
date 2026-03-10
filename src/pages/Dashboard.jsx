import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';

export default function Dashboard() {
    const { events, loading, error } = useEvents();

    return (
        <div className="min-h-screen relative">
            {/* Floating indigo circles – behind everything */}
            <div className="moving-circles bg-black">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>

            {/* Header */}
            <header className="">
                <div className="max-w-7xl mx-auto text-center px-4 py-48">
                    <p className="text-white mb-6 bg-white/15 tracking-tight w-fit p-1 px-3 rounded-full mx-auto">Realtime Disaster Management</p>
                    <h1 className="text-5xl inter-regular text-white tracking-tight">
                        PulseNet — Real-Time <span className="warbler-italic">Intelligence</span>
                    </h1>
                    <p className="text-5xl text-white mt-4 tracking-tight">
                        for <span className='text-indigo-200'> Disaster Response</span>
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
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {events.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
