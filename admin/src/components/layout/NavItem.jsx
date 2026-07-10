import { NavLink } from "react-router-dom";

export default function NavItem({
  icon: Icon,
  title,
  to,
  onClick,
}) {

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="
          w-full
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          transition-all
          duration-300
          text-white/80
          hover:bg-sidebar-hover
          hover:text-white
        "
      >
        <Icon size={20} />

        <span className="font-medium">{title}</span>
      </button>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        transition-all
        duration-300

        ${
          isActive
            ? "bg-white text-sidebar shadow-md"
            : "text-white/80 hover:bg-sidebar-hover hover:text-white"
        }
      `
      }
    >
      <Icon size={20} />
      <span className="font-medium">{title}</span>
    </NavLink>
  );
}