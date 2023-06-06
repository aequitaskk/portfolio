import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto h-[85vh]">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="flex flex-col">
        <div className="max-w-4xl rounded-md flex flex-col space-y-4 mx-auto">
          {/* Project 1 */}
          <div className="flex space-x-6">
            <Image
              src="/images/dummy.jpg"
              alt="project netflix-clone"
              width={300}
              height={200}
              className="rounded-md"
            />
            <div className="px-4 py-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-neutral-100 font-semibold py-2">
                  Netflix clone
                </h3>
                <p className="pl-1 text-neutral-100">description</p>
              </div>
              <div className="pb-2 space-x-4 flex items-center">
                <Link
                  href="/"
                  target="_blank"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-200 flex gap-2 items-center"
                >
                  <BsGithub className="text-2xl" />
                  Code
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-200 flex gap-2 items-center"
                >
                  <BiLinkExternal className="text-2xl" />
                  Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
