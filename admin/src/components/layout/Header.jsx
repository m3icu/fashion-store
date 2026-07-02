import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header
      className="
      sticky
      top-0
      z-20
      flex
      items-center
      justify-between
      border-b
      border-border
      bg-background/90
      backdrop-blur
      px-8
      h-20
      "
    >
      <div>

        <h2 className="text-2xl font-bold text-text">
          Dashboard
        </h2>

        <p className="text-text-secondary text-sm">
          Selamat Datang, Admin
        </p>
  
      </div>
      
      <UserMenu />
    
    </header>
  );
}