import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ background: "#000000" }}>
      <Typography sx={{ color: "white", fontSize: "40px" }} align="center">
        About the event
      </Typography>
      <Typography sx={{ color: "white", fontSize: "20px" }} align="center">
        Technosearch is the annual technical festival of NIT-BHOPAL which is held during the odd semester every year.
      </Typography>
    </Box>
  );
}

export default About;
