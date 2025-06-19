import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiHtml5, SiCss3, SiPostman, SiGithub, SiNodedotjs } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-700" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'GitHub', icon: <SiGithub className="text-black" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
];

export default function Skills() {
  return (
    <div id='skills' className="min-h-screen w-full bg-gradient-to-bl from-sky-500 via-sky-200 to-sky-500 py-20 px-4 md:px-24">
      <div className="mb-20 text-center">
        <Typography
          variant="h3"
          className="inline-block text-4xl w-96 md:text-4xl font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full shadow-lg"
        >
          My Skills
        </Typography>
      </div>

      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <Box
            key={index}
            className="flex flex-col items-center justify-center p-10 rounded-3xl border border-white/30 backdrop-blur-md bg-white/20 hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >
            <div className="text-6xl mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              {skill.icon}
            </div>
            <Typography variant="h6" className="font-semibold text-black text-2xl">
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}