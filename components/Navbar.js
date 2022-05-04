import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/MMDesignLogo.png" width={96} height={32} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/oxido">
        <a>Oxido List</a>
      </Link>
    </nav>
  );
}
