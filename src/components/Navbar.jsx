import Link from "next/link";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={`${classes.container} container`}>
        <div>
          <Link
            href="/"
            aria-label="home"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm2 1v12h16V7zm10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10M4 2h6v2H4z"
              />
            </svg>
          </Link>
        </div>
        <div className={classes.links}>
          <Link href="/">Photos</Link>
          <Link href="/users">Photographers</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
