import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-12">
      <Logo />
      <div className="flex space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/work">Work</NavLink>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
