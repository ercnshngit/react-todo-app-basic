import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="box-border w-full px-3 py-5 bg-primary">
      <ul className="flex items-center max-w-5xl mx-auto my-0">
        <li className="mr-auto text-xl font-bold tracking-wider">
          <Link to="/">TODO APP</Link>
        </li>
      </ul>
    </nav>
  );
}
