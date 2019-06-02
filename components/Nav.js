import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Nav;
