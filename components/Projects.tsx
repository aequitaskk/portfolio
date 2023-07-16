"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {};

const Projects = (props: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ px: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      id="projects"
      className="max-w-7xl mx-auto h-full lg:h-screen px-10 xl:px-0 text-neutral-100"
    >
      <h2 className="text-3xl font-semibold mb-10  lg:mb-8">Projects</h2>

      <Box className="hidden lg:flex px-2 text-neutral-100">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          orientation="vertical"
          className="min-w-[200px] text-neutral-100 bg-neutral-200 h-full rounded-md"
        >
          <Tab label="Netflix Clone" className="text-neutral-100" />
          <Tab label="Shoe Store" className="text-neutral-100" />
          <Tab label="Coffee Shop" className="text-neutral-100" />
          <Tab label="Shoe Configurator" className="text-neutral-100" />
          <Tab label="Baseball Card Website" className="text-neutral-100" />
          <Tab label="Headphone Store" className="text-neutral-100" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProjectCard
            imageUrl="/images/project-netflix.png"
            title="Netflix Clone"
            description="Netflix clone website that uses the TMDB API to display movies. This project was built using Next.js, TypeScript, Tailwind CSS, and Firebase. I also used Next-Auth to implement authentication."
            codeLink="https://github.com/aequitaskk/netflix-clone"
            demoLink="https://netflix-clone-three-liart.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProjectCard
            imageUrl="/images/project-shoestore.png"
            title="Shoe Store"
            description="Shoe e-commerce store that was built with Next.js, Tailwind CSS Strapi, and Stripe. You can add items to your cart and checkout using Stripe."
            codeLink="https://github.com/aequitaskk/shoe-store-frontend"
            demoLink="https://shoe-store-frontend-beryl-zeta.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectCard
            imageUrl="/images/project_coffee.png"
            title="Coffee Shop"
            description="A coffee shop website that was built using Next.js, Tailwind CSS. I used the Framer Motion library to add animations to the website."
            codeLink="https://github.com/aequitaskk/cafe-next"
            demoLink="https://cafe-next.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProjectCard
            imageUrl="/images/project-shoe-configurator.png"
            title="Shoe Configurator"
            description="A shoe configurator that was built using Three.js, React, and TailwindCSS. You can change the color of the shoe and save the shoe image."
            codeLink="https://github.com/aequitaskk/shoe-configurator"
            demoLink="https://shoe-configurator-orpin.vercel.app/"
          />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <ProjectCard
            imageUrl="/images/project-baseballcard.png"
            title="Baseball Card Website"
            description="A baseball card website that was built using Next.js and TypeScript. I used the Framer Motion library to add animations to the website."
            codeLink="https://github.com/aequitaskk/card-website"
            demoLink="https://card-website-g3zt7xikb-aequitaskk.vercel.app/"
          />
        </TabPanel>

        <TabPanel value={value} index={5}>
          <ProjectCard
            imageUrl="/images/project-headphonestore.png"
            title="Headphone Store"
            description="A headphone e-commerce store. This project was built using Next.js, Tailwind CSS, and Stripe. You can add items to your cart and checkout using Stripe. Stripe is used for checkout and CMS as well."
            codeLink="https://github.com/aequitaskk/ecommerce-store"
            demoLink="https://ecommerce-store-lac.vercel.app/"
          />
        </TabPanel>
      </Box>

      <div className="flex-col mt-4">
        <div className="lg:hidden space-y-20">
          <ProjectCard
            imageUrl="/images/project-netflix.png"
            title="Netflix Clone"
            description="Netflix clone website that uses the TMDB API to display movies. This project was built using Next.js, TypeScript, Tailwind CSS, and Firebase. I also used Next-Auth to implement authentication."
            codeLink="https://github.com/aequitaskk/netflix-clone"
            demoLink="https://netflix-clone-three-liart.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project-shoestore.png"
            title="Shoe Store"
            description="Shoe e-commerce store that was built with Next.js, Tailwind CSS Strapi, and Stripe. You can add items to your cart and checkout using Stripe."
            codeLink="https://github.com/aequitaskk/shoe-store-frontend"
            demoLink="https://shoe-store-frontend-beryl-zeta.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project_coffee.png"
            title="Coffee Shop"
            description="A coffee shop website that was built using Next.js, Tailwind CSS. I used the Framer Motion library to add animations to the website."
            codeLink="https://github.com/aequitaskk/cafe-next"
            demoLink="https://cafe-next.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project-shoe-configurator.png"
            title="Shoe Configurator"
            description="A shoe configurator that was built using Three.js, React, and TailwindCSS. You can change the color of the shoe and save the shoe image."
            codeLink="https://github.com/aequitaskk/shoe-configurator"
            demoLink="https://shoe-configurator-orpin.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project-baseballcard.png"
            title="Baseball Card Website"
            description="A baseball card website that was built using Next.js and TypeScript. I used the Framer Motion library to add animations to the website."
            codeLink="https://github.com/aequitaskk/card-website"
            demoLink="https://card-website-g3zt7xikb-aequitaskk.vercel.app/"
          />

          <ProjectCard
            imageUrl="/images/project-headphonestore.png"
            title="Headphone Store"
            description="A headphone e-commerce store. This project was built using Next.js, Tailwind CSS, and Stripe. You can add items to your cart and checkout using Stripe. Stripe is used for checkout and CMS as well."
            codeLink="https://github.com/aequitaskk/ecommerce-store"
            demoLink="https://ecommerce-store-lac.vercel.app/"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
