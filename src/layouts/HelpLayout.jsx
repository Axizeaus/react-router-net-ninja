import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h1>Website Help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nisi
        ipsum excepturi illo laborum velit dolor porro dicta eius ad sit omnis,
        cumque architecto dolorum? Eligendi aliquid esse quae nesciunt.
      </p>
      <nav>
        <NavLink to={"faq"}>FAQ</NavLink>
        <NavLink to={"contact"}>Contact Us </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
