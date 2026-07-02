export default function StatusCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-surface border border-border rounded-card p-5 shadow-card">
      <p className="text-sm text-text-secondary">
        {title}
      </p>

      <h3
        className={`mt-2 text-2xl font-bold ${color}`}
      >
        {value}
      </h3>
    </div>
  );
}