import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderTable({
  orders = [],
  loading,
  onDetail,
}) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className=" p-4 text-left"> Order</th>
            <th className=" p-4 text-left"> Customer</th>
            <th className=" p-4 text-left"> Items</th>
            <th className=" p-4 text-left"> Total</th>
            <th className=" p-4 text-left"> Status</th>
            <th className=" p-4 text-left"> Date</th>
            <th className=" p-4 text-center"> 
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4 font-medium">
                {order.orderNumber
                  ? order.orderNumber
                  : `#${order.id.slice(0,8)}`}
              </td>

              <td className="p-4">
                {order.customer.name}
              </td>

              <td className="p-4">
                {order.items.length}
              </td>

              <td className="p-4">
                Rp{" "}
                {Number(order.totalAmount).toLocaleString(
                  "id-ID"
                )}
              </td>

              <td className="p-4">
                <OrderStatusBadge
                  status={order.status}
                />
              </td>

              <td className="p-4">
                {new Date(
                  order.createdAt
                ).toLocaleDateString("id-ID")}
              </td>
            
              <td className="p-4">
                <div className="flex justify-center">
                  <button
                    onClick={() => onDetail(order)}
                    className="
                      px-3
                      py-1
                      rounded-lg
                      bg-blue-500
                      text-white
                      hover:bg-blue-600
                    "
                  >
                    Detail
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}