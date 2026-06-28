export default function UserMenu() {
  return (
    <div className="flex items-center gap-3">

      <div className="text-right">
    
        <p className="font-semibold text-text">
          Admin
        </p>
        
        <p className="text-sm text-text-secondary">
          Administrator
        </p>
  
      </div>
 
      <div
        className="
          h-11
          w-11
          rounded-full
          bg-primary
          flex
          items-center
          justify-center
          text-white
          font-semibold
          "
        >
          A
        </div>
      </div>
    );
  }