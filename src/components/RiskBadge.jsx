export default function RiskBadge({ score }) {
    let colorClass = 'bg-green-600';
    let label = 'Low';

    if (score >= 0.85) {
        colorClass = 'bg-red-600';
        label = 'Critical';
    } else if (score >= 0.70) {
        colorClass = 'bg-orange-500';
        label = 'High';
    } else if (score >= 0.45) {
        colorClass = 'bg-yellow-500';
        label = 'Medium';
    }

    return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white ${colorClass}`}>
            {label} · {score.toFixed(2)}
        </span>
    );
}