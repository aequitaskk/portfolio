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
          <Tab label="Shoe e-commerce" className="text-white" />
          <Tab label="Coffee Shop" className="text-white" />
          <Tab label="Portfolio" className="text-white" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProjectCard imageUrl="/images/dummy.jpg" title="Netflix Clone" description="netflix description" codeLink="/" demoLink="/"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
        <ProjectCard imageUrl="/images/project_coffee.png" title="Coffee Shop" description="coffee shop description" codeLink="/" demoLink="/"/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </section>
  );
};

export default Projects;
