import { useEffects, useState } from "react";

import { getOrders } from "../api/order.api";

export function useOrders() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchOrders() {
    try {
      const result = await getOrders();
  
      setData(result.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    data,
    loading,
    refetch: fetchOrders,
  };
}