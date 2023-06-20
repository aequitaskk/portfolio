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
          <Box sx={{ p: 3 }}>
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
      className="max-w-7xl mx-auto h-full lg:h-screen px-10 xl:px-0"
    >
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>

      <Box className="hidden lg:flex px-2">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          orientation="vertical"
          className="min-w-[200px]"
        >
          <Tab label="Netflix Clone" className="text-white" />
          <Tab label="Shoe Store" className="text-white" />
          <Tab label="Coffee Shop" className="text-white" />
          <Tab label="Headphone Store" className="text-white" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProjectCard
            imageUrl="/images/project-netflix.png"
            title="Netflix Clone"
            description="This is a Netflix clone website that uses the TMDB API to display movies. You can also watch the trailer of the movie by clicking on the movie thumbnail. This project was built using Next.js, TypeScript, Tailwind CSS, and Firebase."
            codeLink="https://github.com/aequitaskk/netflix-clone"
            demoLink="https://netflix-clone-three-liart.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProjectCard
            imageUrl="/images/project-shoestore.png"
            title="Shoe Store"
            description="This is a shoe e-commerce store. This project was built using Next.js, JavaScript, Tailwind CSS Strapi, and Stripe. You can add items to your cart and checkout using Stripe."
            codeLink="https://github.com/aequitaskk/shoe-store-frontend"
            demoLink="https://shoe-store-frontend-beryl-zeta.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectCard
            imageUrl="/images/project_coffee.png"
            title="Coffee Shop"
            description="This is a coffee shop website. This project was built using Next.js, JavaScript, Tailwind CSS. I used the Framer Motion library to add animations to the website."
            codeLink="https://github.com/aequitaskk/cafe-next"
            demoLink="https://cafe-next.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProjectCard
            imageUrl="/images/project-headphonestore.png"
            title="Headphone Store"
            description="This is a headphone e-commerce store. This project was built using Next.js, JavaScript, Tailwind CSS, and Stripe. You can add items to your cart and checkout using Stripe. I also used Stripe as a CMS."
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
            description="This is a Netflix clone website that uses the TMDB API to display movies. You can also watch the trailer of the movie by clicking on the movie thumbnail. This project was built using Next.js, TypeScript, Tailwind CSS, and Firebase."
            codeLink="https://github.com/aequitaskk/netflix-clone"
            demoLink="https://netflix-clone-three-liart.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project-shoestore.png"
            title="Shoe Store"
            description="This is a shoe e-commerce store. This project was built using Next.js, JavaScript, Tailwind CSS Strapi, and Stripe. You can add items to your cart and checkout using Stripe."
            codeLink="https://github.com/aequitaskk/shoe-store-frontend"
            demoLink="https://shoe-store-frontend-beryl-zeta.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project_coffee.png"
            title="Coffee Shop"
            description="This is a coffee shop website. This project was built using Next.js, JavaScript, Tailwind CSS. I used the Framer Motion library to add animations to the website."
            codeLink="https://github.com/aequitaskk/cafe-next"
            demoLink="https://cafe-next.vercel.app/"
          />
          <ProjectCard
            imageUrl="/images/project-headphonestore.png"
            title="Headphone Store"
            description="This is a headphone e-commerce store. This project was built using Next.js, JavaScript, Tailwind CSS, and Stripe. You can add items to your cart and checkout using Stripe. I also used Stripe as a CMS."
            codeLink="https://github.com/aequitaskk/ecommerce-store"
            demoLink="https://ecommerce-store-lac.vercel.app/"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
