import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image alt="logo" src={"/images/E1.png"} width={80} height={80} />
        <nav>
          <ul>
            <li>
              <Link legacyBehavior href="/" passHref>
                <a> Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/events" passHref>
                <a> Events</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about-us" passHref>
                <a> About us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">Sed ut videre potes</p>
    </header>
  );
};
