import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="px-20 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/images/logo.png" alt="logo" width="80" height="80" />
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex space-x-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Contact me</Link>
            </li>
          </ul>
          <div className="flex space-x-6">
            <Link href="">
              <BsGithub className="text-2xl" />
            </Link>
            <Link href="">
              <BsTwitter className="text-2xl" />
            </Link>
          </div>
          <button className="border-2 py-2 px-4 hover:bg-white hover:text-black transition font-semibold">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
