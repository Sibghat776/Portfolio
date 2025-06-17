import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, IconButton, Button } from "@mui/material";
import { flex, gridRow, styled, width } from "@mui/system";
import { motion, px } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(4),
  display: "flex",
  alignItems: "center",
}))

const ProfileImage = styled(motion.img)({
  width: "100%",
  maxWidth: "400px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
})

const skills = [
  "MERN Stack Developer",
  "MongoDB",
  "ExpressJS",
  "ReactJS",
  "NodeJS"
]

const Hero = () => {
  const [skillIndex, setSkillIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <HeroSection >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" fontWeight="bold" className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-900" gutterBottom>
                Sibghat Zaka Ullah
              </Typography>
              <Typography
                variant="h4"
                component={motion.div}
                key={skillIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                color="primary"
                gutterBottom
              >
                {skills[skillIndex]}
              </Typography>
              <Typography variant="body2" component="p" fontFamily={"revert"} paragraph width={"50rem"} >
                As a MERN stack developer, I work with MongoDB, Express.js, React, and Node.js to build web applications, handling both the front-end and back-end. My responsibilities include designing, developing, and maintaining web applications, ensuring seamless performance and optimal user experience. I'll be involved in tasks like creating user interfaces, managing databases, and developing server-side logic.</Typography>
              <Box sx={{ mt: 3, mb: 4 }}>
                <IconButton color="primary" aria-label="github" component="a" href="github.com/Sibghat776">
                  <FaGithub size={24} />
                </IconButton>
                <IconButton color="primary" aria-label="linkedin" component="a" href="www.linkedin.com/in/sibghat-ullah-842005327">
                  <FaLinkedin size={24} />
                </IconButton>
                <IconButton color="primary" aria-label="twitter" component="a" href="#">
                  <FaTwitter size={24} />
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
                sx={{ width: "20rem" }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  )
}

export default Hero;