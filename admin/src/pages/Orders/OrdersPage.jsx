import { useEffect, useState } from "react";
import { getOrders } from "../../api/order.api";
import OrderTable from "../../components/Orders/OrderTable";
import OrderDetailModal from "../../components/Orders/OrderDetailModal";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  async function fetchOrders() {
   
    try {
      const res = await getOrders();
      console.log(res.data);
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Order Management
        </h1>
        
        <p className="text-gray-500">
          Manage customer orders
        </p>
      </div>

      <OrderTable 
        orders={orders} 
        loading={loading}
        onDetail={setSelectedOrder}
      />

      <OrderDetailModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onUpdated={fetchOrders}
      />

    </div>
  );
}
    
      
