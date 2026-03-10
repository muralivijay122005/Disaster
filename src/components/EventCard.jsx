import { FiMapPin, FiCalendar } from "react-icons/fi";
import RiskBadge from "./RiskBadge";

export default function EventCard({ event }) {

    const timeString = new Date(event.created_at).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short"
    });

    return (
        <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">

            {/* Top Row */}
            <div className="flex justify-between items-start gap-4 mb-3">

                <div className="flex items-center gap-2">
                    <FiMapPin className="text-neutral-400" size={16} />

                    <h3 className=" inter-regular tracking-tight text-white capitalize">
                        {event.city}
                    </h3>
                </div>

                <RiskBadge score={event.risk_score} />

            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-white tracking-tight">

                <FiCalendar className="text-neutral-400" size={14} />

                {timeString}

            </div>

            {/* Event ID */}
            <div className="mt-3 text-xs text-white font-mono tracking-tight">
                ID: {event.id.substring(0, 8)}…
            </div>

        </div>
    );
}
