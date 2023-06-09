import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto mt-64 h-[85vh]">
      <div className="flex">
        {/* Left */}
        <div className="flex-col flex-[1.5] space-y-2">
          <h1 className="text-6xl font-bold">Front-End Web Developer</h1>
          <p className="pt-2">
            Hi!👋🏻 I'm Kohei. A passionate Front-End React/Next Web
            Developer based in Rochester, NY.
          </p>
          <ul className="flex space-x-6 pt-4">
            <li className="hover:scale-125 transition duration-200 ease-out">
              <Link href="https://github.com/aequitaskk" target="_blank">
                <BsGithub className="text-2xl" />
              </Link>
            </li>
            <li className="hover:scale-125 transition duration-200 ease-out">
              <Link
                href="https://www.linkedin.com/in/kohei-kurano-1b5993240/"
                target="_blank"
              >
                <BsLinkedin className="text-2xl" />
              </Link>
            </li>
            <li className="hover:scale-125 transition duration-200 ease-out">
              <Link href="https://twitter.com/aequitaskk" target="_blank">
                <BsTwitter className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex flex-1">
          <Image src="/images/profile.jpg" alt="profile" width="350" height="350" className="rounded-3xl ml-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
