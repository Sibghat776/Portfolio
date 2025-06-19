import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Box className="min-h-screen overflow-hidden pt-8 pb-20 px-4 bg-gradient-to-bl from-sky-500 via-sky-200 to-sky-500">
      <Typography
        variant="h3"
        className="text-center py-7 text-slate-900 font-bold text-4xl md:text-5xl"
      >
        Contact Me
      </Typography>

      <Grid container spacing={6} justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg border py-5 border-white/30 rounded-3xl p-6 shadow-xl"
          >
            <form action="https://formspree.io/f/{yourFormId}" className='space-y-7' method="POST">
              <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                required
                className="bg-white rounded-xl"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                required
                className="bg-white rounded-xl"
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
                className="bg-white rounded-xl"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className="mt-4 bg-black text-white hover:bg-slate-800"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-slate-800"
          >
            <Typography variant="h4" className="mb-4">
              Let's connect and create something great!
            </Typography>
            <Typography>Email: <strong><a href="mailto:ullahsibghat786@gmail.com" target='_blank' className='text-blue-700 hover:text-blue-600'>ullahsibghat786@gmail.com</a></strong></Typography>
            <Typography>Phone: <strong>+92 3343688913</strong></Typography>
            <Typography className="mt-2">Location: Karachi, Pakistan</Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}