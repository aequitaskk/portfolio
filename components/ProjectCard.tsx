import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
};

const ProjectCard = ({
  imageUrl,
  title,
  description,
  codeLink,
  demoLink,
}: Props) => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex pb-4 space-x-4">
        <h3 className="text-4xl text-neutral-100 font-semibold">{title}</h3>
        <div className="pb-2 space-x-4 flex items-center">
          <Link
            href={codeLink}
            target="_blank"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-200 flex gap-2 items-center"
          >
            <BsGithub className="text-2xl" />
            Code
          </Link>
          <Link
            href={demoLink}
            target="_blank"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-200 flex gap-2 items-center"
          >
            <BiLinkExternal className="text-2xl" />
            Demo
          </Link>
        </div>
      </div>
      <p className="text-neutral-100 text-lg pb-8">{description}</p>
      <Image
        src={`${imageUrl}`}
        alt="project image"
        width={1000}
        height={400}
        className="rounded-md"
      />

      
    </div>
  );
};

export default ProjectCard;
