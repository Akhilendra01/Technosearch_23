import { Box, Typography } from "@mui/material";

function Landing() {
  return (
    <Box
      sx={{
        background: `url("/img/bg/bg1.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Adjust the height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="flex flex-row item-center justify-center">
        <Typography sx={{ color: "white", fontSize: "60px" }}>
          {" "}
          Technosearch 23{" "}
        </Typography>
      </div>
    </Box>
  );
}

export default Landing;
