import { Box } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #FC004E, #10CBE0)",
        color: "white",
        textAlign: "center",
        py: 1,
        px: 2,
        fontWeight: "bold",
        fontSize: {xs: "16px", md: "22px"}
      }}
    >
      🚀{" "}
      <Box component={"span"} color={"text.secondary"}>
        FRESH BEGINNINGS SALE:
      </Box>{" "}
      Extra 25% OFF, Limited Spots – start your journey today!
    </Box>
  );
};

export default Banner;
