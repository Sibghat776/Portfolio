import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, IconButton, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(4),
  display: "flex",
  alignItems: "center",
}));

const ProfileImage = styled(motion.img)(({ theme }) => ({
  width: "100%",
  maxWidth: "300px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  [theme.breakpoints.up("md")]: {
    maxWidth: "400px",
  },
}));

const skills = [
  "MERN Stack Developer",
  "MongoDB",
  "ExpressJS",
  "ReactJS",
  "NodeJS"
];

const Hero = () => {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Text Side */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-900"
                gutterBottom
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Sibghat Zaka Ullah
              </Typography>

              <Typography
                variant="h5"
                component={motion.div}
                key={skillIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                color="primary"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
                }}
              >
                {skills[skillIndex]}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  color: "#333",
                  lineHeight: 1.6,
                }}
              >
                As a MERN stack developer, I work with MongoDB, Express.js, React, and Node.js to build web applications. I design and maintain apps with seamless performance and optimal user experience.
              </Typography>

              {/* Socials + Resume */}
              <Box sx={{ mt: 3, mb: 4 }}>
                <IconButton color="primary" href="https://github.com/Sibghat776" target="_blank">
                  <FaGithub size={22} />
                </IconButton>
                <IconButton color="primary" href="https://www.linkedin.com/in/sibghat-ullah-842005327" target="_blank">
                  <FaLinkedin size={22} />
                </IconButton>
                <IconButton color="primary" href="#">
                  <FaTwitter size={22} />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                size="large"
                startIcon={<BiDownload />}
                sx={{ borderRadius: 2 }}
              >
                Download Resume
              </Button>
            </motion.div>
          </Grid>

          {/* Right Image Side */}
          <Grid item xs={12} md={6} container justifyContent="center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProfileImage
                src="https://i.pinimg.com/originals/45/e4/79/45e479ae0f8355a254862992bac33f5b.gif"
                alt="Professional headshot"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
