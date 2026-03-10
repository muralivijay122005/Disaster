import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

export default function RiskBadge({ score }) {
    let colorClass = "bg-green-700/25";
    let textClass = "text-green-300";
    let label = "Low";
    let Icon = FiCheckCircle;

    if (score >= 0.85) {
        colorClass = "bg-red-700/25";
        textClass = "text-red-300";
        label = "Critical";
        Icon = FiAlertTriangle;
    } else if (score >= 0.70) {
        colorClass = "bg-orange-700/25";
        textClass = "text-orange-300";
        label = "High";
        Icon = FiAlertTriangle;
    } else if (score >= 0.45) {
        colorClass = "bg-yellow-700/25";
        textClass = "text-yellow-300";
        label = "Medium";
        Icon = FiAlertTriangle;
    }

    return (
        <span
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs inter-regular ${textClass} ${colorClass}`}
        >
            <Icon className="text-sm" />
            {label} · {score.toFixed(2)}
        </span>
    );
}
