export default function OrderStatusBadge({
  status,
}) {
  const colors = {
    PENDING:
      "bg-yellow-100 text-yellow-700",
    PAID:
      "bg-blue-100 text-blue-700",
    PROCESSING:
      "bg-indigo-100 text-indigo-700",
    SHIPPED:
      "bg-purple-100 text-purple-700",
    COMPLETED:
      "bg-green-100 text-green-700",
    CANCELLED:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
        ${colors[status] ||
        "bg-gray-100 text-gray-700"}
      `}
    >
      {status}
    </span>
  );
}