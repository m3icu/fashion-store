import useDashboardStatistics from "../../hooks/useDashboardStatistics";
import StatisticCard from "../../components/dashboard/StatisticCard";
import StatusCard from "../../components/dashboard/StatusCard";
import useRecentOrders from "../../hooks/useRecentOrders";
import RecentOrdersTable from "../../components/dashboard/RecentOrdersTable";

import {
  Package,
  Boxes,
  Users,
  ShoppingCart,
} from "lucide-react";

export default function DashboardPage() {
 

        const {
            data,
            isLoading,
            error,
        } = useDashboardStatistics();

        const {
        data: recentOrders,
        isLoading: recentLoading,
        } = useRecentOrders();
       
        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Something went wrong...</p>;
        }
        const formatCurrency = (amount) => {
          return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(Number(amount));
        };

        return (
          <div className="space-y-8">
{/* Statistics */}
           <div className="bg-surface rounded-card border border-border p-8 shadow-card">
           
               <h1 className="text-2xl font-bold text-text"> 
                   Dashboard
               </h1>

               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

                 <StatisticCard
                   title="Products"
                   value={data.totalProducts}
                   icon={<Package size={24} />}
                 />

                 <StatisticCard
                   title="Variants"
                   value={data.totalVariants}
                   icon={<Boxes size={24} />}
                 />

                 <StatisticCard
                   title="Customers"
                   value={data.totalCustomers}
                   icon={<Users size={24} />}
                 />

                 <StatisticCard
                   title="Orders"
                   value={data.totalOrders}
                   icon={<ShoppingCart size={24} />}
                 />
              </div>
            </div>
    
{/* Revenue */}
                 <div className="bg-surface border border-border rounded-card p-6 shadow-card">
                <p className="text-text-secondary">
                  Total Revenue
                </p>
         
                <h2 className="mt-2 text-4xl font-bold text-primary">
                  {formatCurrency(data.totalRevenue)}
                </h2>
              
            </div>
{/* Order Status */}
            <div className="bg-surface border border-border rounded-card p-6 shadow-card">

              <h2 className="text-xl font-semibold text-text">
                Order Status
              </h2>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">

                <StatusCard
                  title="Pending"
                  value={data.pendingOrders}
                  color="text-warning"
                />

                <StatusCard
                  title="Paid"
                  value={data.paidOrders}
                  color="text-primary"
                />

                <StatusCard
                  title="Processing"
                  value={data.processingOrders}
                  color="text-accent"
                />

                <StatusCard
                  title="Shipped"
                  value={data.shippedOrders}
                  color="text-primary"
                />

                <StatusCard
                  title="Delivered"
                  value={data.deliveredOrders}
                  color="text-success"
                />

                <StatusCard
                  title="Cancelled"
                  value={data.cancelledOrders}
                  color="text-danger"
                />
                     
              </div>
             {!recentLoading && (
                <RecentOrdersTable 
                  orders={recentOrders} 
                />
             )}        
          </div>

       </div>
     );
  
}     

   