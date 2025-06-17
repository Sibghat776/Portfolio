import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiHtml5, SiCss3, SiPostman, SiGithub, SiNodedotjs } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-200" /> },
  { name: 'React', icon: <SiReact className="text-cyan-300" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-400" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
];

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 py-10 px-6 md:px-28">
      <Typography
        variant="h3"
        className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-extrabold mb-20 pb-20"
      >
        My Skills
      </Typography>

      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((skill, index) => (
          <Box
            key={index}
            className="flex flex-col items-center justify-center p-10 rounded-3xl bg-[#1f2937] text-white shadow-lg hover:shadow-[0_0_30px_#00fff7] transition duration-300 transform hover:scale-105"
          >
            <div className="text-7xl mb-4 drop-shadow-lg">{skill.icon}</div>
            <Typography variant="h6" className="font-bold text-lg">
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}