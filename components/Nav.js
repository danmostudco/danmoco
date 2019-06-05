import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">
      <a className="nav__link">Home</a>
    </Link>
    <Link href="/work">
      <a className="nav__link">Work</a>
    </Link>
    <Link href="/notes">
      <a className="nav__link">Notes</a>
    </Link>
    <Link href="/about">
      <a className="nav__link">About</a>
    </Link>
  </nav>
);

export default Nav;
