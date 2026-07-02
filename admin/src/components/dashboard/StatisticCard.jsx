export default function StatisticCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-surface rounded-card border border-border shadow-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">
 
        <div>
 
          <p className="text-sm text-text-secondary">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-text">
            {value.toLocaleString()}
          </h2>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-primary">
          {icon}
        </div>

      </div>

    </div>
  );
}