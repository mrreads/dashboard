
import { NavLink  } from "react-router-dom";
import './index.scss';

import users from "@/assets/icons/users.svg";
import journal from "@/assets/icons/journal.svg";

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink to="/" end className="navigation__item"> <img src={journal} /></NavLink> 
            <NavLink to="/clients" end className="navigation__item"><img src={users} /></NavLink>
        </div>
    )
}