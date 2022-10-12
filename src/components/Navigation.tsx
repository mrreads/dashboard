
import { NavLink  } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink to="/">Base</NavLink>
            <NavLink to="/clients">Clients</NavLink>
        </div>
    )
}