import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 4',
    description: 'Description for Project 4',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 5',
    description: 'Description for Project 5',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 6',
    description: 'Description for Project 6',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 7',
    description: 'Description for Project 7',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 8',
    description: 'Description for Project 8',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 9',
    description: 'Description for Project 9',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    title: 'Project 10',
    description: 'Description for Project 10',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      visible.push(projects[(currentIndex + i + projects.length) % projects.length]);
    }
    return visible;
  };

  return (
    <Box className="min-h-screen py-20 px-4 md:px-24 bg-gradient-to-br from-sky-400 via-sky-300 to-sky-100">
      <Typography variant="h3" className="text-center text-slate-900 font-bold mb-12 text-4xl md:text-5xl">
        My Projects
      </Typography>

      <Box className="flex items-center justify-center gap-6 relative">
        <Button onClick={prevSlide} className="absolute left-0 z-10 bg-white/30 backdrop-blur-lg p-3 rounded-full hover:bg-white/50">
          <FaArrowLeft size={20} />
        </Button>

        {getVisibleProjects().map((project, index) => (
          <motion.div
            key={index}
            className={`rounded-3xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-transform duration-300 ${index === 1 ? 'scale-110 shadow-[0_0_40px_rgba(255,255,255,0.6)]' : 'scale-95 opacity-70'}`}
            style={{ width: '300px', padding: '20px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={project.image} alt={project.title} className="rounded-xl mb-4 w-full" />
            <Typography variant="h6" className="text-white font-semibold mb-2">
              {project.title}
            </Typography>
            <Typography variant="body2" className="text-white mb-4">
              {project.description}
            </Typography>
            <Button
              variant="outlined"
              className="text-white border-white hover:bg-white hover:text-sky-700"
              href={project.link}
              target="_blank"
            >
              Live Link
            </Button>
          </motion.div>
        ))}

        <Button onClick={nextSlide} className="absolute right-0 z-10 bg-white/30 backdrop-blur-lg p-3 rounded-full hover:bg-white/50">
          <FaArrowRight size={20} />
        </Button>
      </Box>
    </Box>
  );
}