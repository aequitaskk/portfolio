"use client";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto mt-20 lg:mt-64 h-[85vh]">
      <div className="flex flex-col lg:flex-row px-10 md:px-2 lg:items-start items-center">
        {/* Left */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="flex-col flex-[1.5] space-y-2"
        >
          <h1 className="text-6xl font-bold">Front-End Web Developer</h1>
          <p className="pt-2 font-semibold text-3xl">
            Hi!👋🏻 <span className="text-rose-400">I&apos;m Kohei</span>. A passionate
            Front-End React/Next Web Developer based in Rochester, NY.
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
        </motion.div>

        {/* Right */}
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0, x: 30 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-1">
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width="350"
            height="350"
            className="rounded-3xl lg:ml-10 mt-10 lg:mt-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
