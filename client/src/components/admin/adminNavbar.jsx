import { navItems } from "@/config/nav"
import { NavLink } from "react-router-dom"

const AdminNavbar = () => {
  return (
    <div className="text-sidebar-foreground">
          {navItems.map((item) => (
              <NavLink to={item.to} key={item.to} end={item.end}>
                  <item.icon />
                {item.label}
            </NavLink>
        ))}
      </div>
  )
}

export default AdminNavbar
