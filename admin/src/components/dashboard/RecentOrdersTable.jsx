import StatusBadge from "./StatusBadge";
export default function RecentOrderTable({ orders }) {
return (
  <div className="bg-surface rounded-card border border-border shadow-card p-6">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-text">
        Recent Orders
      </h2>

      <button className="text-sm text-primary hover:underline">
        View All
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full mt-6">
        <thead>
          <tr className="border-b border-border text-left text-text-secondary">
            <th className="pb-3">Order</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Total</th>
            <th className="pb-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-10 text-center text-text-secondary"
              >
                No recent orders
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border hover:bg-background transition-colors cursor-pointer"
              >
                <td className="py-4 font-medium">
                  #{order.id.slice(0, 8).toUpperCase()}
                </td>

                <td>{order.customer?.name ?? "-"}</td>

                <td>
                  <StatusBadge status={order.status} />
                </td>

                <td>
                  Rp {Number(order.totalAmount).toLocaleString("id-ID")}
                </td>

                <td>
                  {new Intl.DateTimeFormat("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(order.createdAt))}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);
}