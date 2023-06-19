import Image from "next/image";
import React from "react";
import { techStack } from "@/utils/techStack";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="max-w-7xl mx-auto h-[80vh]">
      <div className="flex">
        {/* Left */}
        <div className="flex-1 mr-10">
          <Image
            src="/images/aboutme.jpg"
            alt="about me"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* Right */}
        <div className="flex-[2] flex-col">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <div className="space-y-4 pt-4 pl-2 text-neutral-100">
            <p>
              My name is Kohei Kurano. I am a highly ambitious and
              self-motivated web developer based in Rochester, NY. I'm
              originally from Japan and moved to the United States in 2016.
            </p>
            <p>
              I am passionate about building scalable and responsive web
              applications with a focus on user experience.
            </p>
          </div>
          <div className="flex gap-6 items-center mt-10 pl-2">
            {techStack.map((tech) => (
              <div key={tech.name} className="items-center flex flex-col">
                <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                <p className="text-xs font-light text-neutral-100 pt-2">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
