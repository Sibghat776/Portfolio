import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import myPic from "../assets/myPic 1.jpg"
const AboutMe = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-sky-300 via-sky-200 to-white py-20 px-6 md:px-24">
            <Typography
                variant="h3"
                className="text-slate-900 font-bold text-center text-4xl md:text-5xl mb-16"
                sx={{
                    background: 'linear-gradient(to right, #0f172a, #334155)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                About Me
            </Typography>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                {/* Profile Image */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <motion.img
                        src={myPic}
                        alt="My Profile"
                        className="rounded-3xl w-full max-w-md shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </Grid>

                {/* Text Section */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <Typography variant="h5" className="text-slate-800 font-bold mb-4">
                            I'm Sibghat Zaka Ullah
                        </Typography>

                        <Typography
                            variant="body1"
                            className="text-gray-700 leading-relaxed"
                            sx={{ fontSize: '1.1rem' }}
                        >
                            A passionate MERN stack developer with a knack for building responsive, user-friendly, and dynamic web applications. I love turning complex problems into elegant solutions through clean and efficient code.
                            <br /><br />
                            My journey started with HTML/CSS and grew into full-stack development using MongoDB, Express, React, and Node.js. I'm constantly learning and pushing boundaries to deliver better, faster, and smarter applications.
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>


        </div>
    );
};

export default AboutMe;
