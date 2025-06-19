import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import project2 from "../assets/Quiz App Thumbnail.jpg";
import project3 from "../assets/Weather App.jpg";

const projects = [
  {
    title: 'Country Data',
    description: 'Explore world countries & their stats.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/The_world_flag_2006.svg',
    link: 'https://sibghatweatherapp.netlify.app/',
  },
  {
    title: 'Quiz Application',
    description: 'Test your knowledge with this fun quiz!',
    image: project2,
    link: 'https://quizappication.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'Check current weather by city or country.',
    image: project3,
    link: 'https://sibghatweatherapp.netlify.app/',
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getProject = (offset) => {
    const index = (currentIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  return (
    <Box id="projects" className="min-h-screen py-28 px-4 bg-gradient-to-br from-sky-500 via-sky-200 to-sky-500 overflow-hidden">
      <Typography variant="h3" className="text-center pb-24 text-slate-900 font-bold mb-12 text-4xl md:text-5xl">
        My Projects
      </Typography>

      <Box className="flex flex-col md:flex-row items-center justify-center relative gap-6">
        <Button onClick={prevSlide} className="absolute left-2 md:left-10 z-10 bg-white/30 backdrop-blur-lg p-3 rounded-full hover:bg-white/50">
          <FaArrowLeft size={20} />
        </Button>

        <Box className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {[getProject(-1), getProject(0), getProject(1)].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === 1 ? 1 : 0.5,
                scale: index === 1 ? 1.05 : 0.9
              }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl space-y-4 px-6 py-6 w-[18rem] md:w-[22rem] hover:scale-105 transition-all ${
                index === 1 ? 'z-20' : 'z-10'
              }`}
            >
              <img src={project.image} alt={project.title} className="rounded-xl h-40 w-full object-cover" />
              <Typography variant="h6" className="text-black font-semibold mb-1">
                {project.title}
              </Typography>
              <Typography variant="body2" className="text-gray-800 mb-3">
                {project.description}
              </Typography>
              <Button
                variant="outlined"
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black border-white hover:bg-black hover:text-white"
              >
                Live Link
              </Button>
            </motion.div>
          ))}
        </Box>

        <Button onClick={nextSlide} className="absolute right-2 md:right-10 z-10 bg-white/30 backdrop-blur-lg p-3 rounded-full hover:bg-white/50">
          <FaArrowRight size={20} />
        </Button>
      </Box>
    </Box>
  );
}
