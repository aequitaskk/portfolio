"use client";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

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
    <section className="max-w-7xl mx-auto h-[100vh]">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>

      <Box className="flex px-2">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          orientation="vertical"
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
            description="netflix description"
            codeLink="https://github.com/aequitaskk/netflix-clone"
            demoLink="https://netflix-clone-three-liart.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProjectCard
            imageUrl="/images/project-shoestore.png"
            title="Shoe Store"
            description="Shoe Store description"
            codeLink="https://github.com/aequitaskk/shoe-store-frontend"
            demoLink="https://shoe-store-frontend-beryl-zeta.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectCard
            imageUrl="/images/project_coffee.png"
            title="Coffee Shop"
            description="coffee shop description"
            codeLink="https://github.com/aequitaskk/cafe-next"
            demoLink="https://cafe-next.vercel.app/"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProjectCard
            imageUrl="/images/project-headphonestore.png"
            title="Headphone Store"
            description="Headphone Store description"
            codeLink="https://github.com/aequitaskk/ecommerce-store"
            demoLink="https://ecommerce-store-lac.vercel.app/"
          />
        </TabPanel>
      </Box>
    </section>
  );
};

export default Projects;
