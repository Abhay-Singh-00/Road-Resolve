import {
HomeIcon,
DocumentChartBarIcon,
QuestionMarkCircleIcon,
CogIcon,
ExclamationTriangleIcon
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar:React.FC<SidebarProps> = ({open, setOpen}) => {
const menuItems = [
{ label: "Dashboard", icon: HomeIcon, path: "/citizen" },
{ label: "Report Grievance", icon: ExclamationTriangleIcon, path: "/citizen/report" },
{ label: "Reports", icon: DocumentChartBarIcon, path: "/citizen/reports" },
{ label: "Help", icon: QuestionMarkCircleIcon, path: "/citizen/help" },
];

return (

<aside  className={`
        fixed md:relative flex flex-col
        top-0 left-0 h-screen w-64 bg-gray-800 text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
    <button
        onClick={() => setOpen(false)}
        className="md:hidden absolute right-3 top-3 text-white bg-gray-700 px-2 py-1 rounded"
      >
        ✕
      </button>
  <Logo />

  <div className="mt-10 flex-1">
    <ul className="space-y-2 px-4">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={index}
            to={item.path}
            end ={item.path === "/citizen"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded transition-all duration-200
              ${isActive ? "bg-yellow-400/20 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </ul>
  </div>

  <NavLink
    to="/citizen/setting"
    className="p-6 border-t border-gray-700 hover:bg-gray-700 cursor-pointer flex items-center gap-3"
  >
    <CogIcon className="w-5 h-5" />
    Setting
  </NavLink>
</aside>

);
};

export default Sidebar;