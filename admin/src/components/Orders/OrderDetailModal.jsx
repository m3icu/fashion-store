import { useState } from "react";
import { updateOrderStatus } from "../../api/order.api";

export default function OrderDetailModal({
  order,
  onClose,
  onUpdated,
}) {
  if (!order) return null;
  
  const [status, setStatus] = useState(order.status);
  const [saving, setSaving] = useState(false);
 
async function handleSave() {
  try {
    setSaving(true);

    await updateOrderStatus(
      order.id,
      status
    );
    
    onUpdated();

    onClose();

  } catch (err) {
      console.error(err);
      alert("Gagal update status");
  } finally {
      setSaving(false);
  }
}      

  return (
    <div  
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >
      <div 
        className="
          bg-white 
          rounded-xl 
          w-full 
          max-w-2xl 
          max-h-[90vh]
          overflow-y-auto
          p-6
        "
      >

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Order Detail
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            ✕  
          </button>
        </div>

        <div className="space-y-5">
        
          <div>
            <h3 className="font-semibold mb-2">
              Customer
            </h3>
         
            <p>
              <strong>Name :</strong>{" "}
              {order.customer.name}
            </p>

            <p>
              <strong>Email :</strong>{" "}
              {order.customer.email}
            </p>
          </div>

          <hr />

          <div>
            <h3 className="font-semibold mb-3">
              Items
            </h3>

            <div className="space-y-3">
            
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-3"
                >
                  <p className="font-semibold">
                    {
                      item.variant.product
                        .name
                    }
                  </p>
             
                  <p>
                    variant :
                    {" "}
                    {
                      item.variant
                        .variantName
                    }
                  </p>

                  <p>
                    Qty :
                    {" "}
                    {item.quantity}
                  </p>
                   
                  <p>
                    Price :
                    Rp{" "}
                    {Number(
                      item.price
                    ).toLocaleString(
                      "id-ID"
                    )}
                  </p>
                </div>
              ))}
  
            </div>
          </div>

          <hr />
   
          <div className="text-right">
           
            <h3 className="text-xl font-bold">

              Total

            </h3>
  
            <p className="text-2xl text-primary font-bold">

              Rp{" "}
              {Number(
                order.totalAmount
              ).toLocaleString(
                "id-ID"
              )}  

            </p>

            <hr className="my-5" />

            <div className="space-y-3">

              <label className="font-semibold">
                Status
              </label>

              <select
                value={status}
                onChange={(e)=>
                  setStatus(e.target.value)
                }
                className="
                  w-full
                  border
                  rounded-lg
                  px-3
                  py-2
                "
              >
                <option>PENDING</option>
                <option>PAID</option>
                <option>PROCESSING</option>
                <option>SHIPPED</option>
                <option>COMPLETED</option>
                <option>CANCELLED</option>
              </select>

              <button
                onClick={handleSave}
                disabled={saving}
                className="
                  w-full
                  bg-primary
                  text-white
                  py-3
                  rounded-lg
                  hover:opacity-90
                "
              >
                {saving
                  ? "Saving..."
                  : "Save Status"}
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}        