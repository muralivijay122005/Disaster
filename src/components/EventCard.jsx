import RiskBadge from './RiskBadge';

export default function EventCard({ event }) {
    const timeString = new Date(event.created_at).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {event.city}
                </h3>
                <RiskBadge score={event.risk_score} />
            </div>

            <div className="text-sm text-gray-600">
                {timeString}
            </div>

            <div className="mt-3 text-xs text-gray-500 font-mono">
                ID: {event.id.substring(0, 8)}…
            </div>
        </div>
    );
}